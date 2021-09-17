const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/HttpError");
const Note = require("../models/Note");

async function notes_getAll(req, res, next) {

  let notes = null;
  try {
    notes = await Note.find({});
    // console.log(resumeData);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("notes ctrler: something's wrong with the database!", 500)
    );
  }

  if (!notes || notes.length === 0) {
    return next(new HttpError("no note found.", 404));
  }
  // console.log("hereeeeeeee");
  // console.log(notes);
  res
    .status(200)
    .json({
      notes: notes.map((item) => item.toObject({ getters: true })),
    });
}

async function notes_addNew(req, res, next){
    const result = validationResult(req).formatWith(
        ({ location, msg, param, value, nestedErrors }) => {
          // Build your resulting errors however you want! String, object, whatever - it works!
          return `${param} has ${msg} >>> ${value}`;
        }
      );
      if (!result.isEmpty()) {
        // Response will contain something like
        // { errors: [ "body[password]: must be at least 10 chars long" ] }
        // return res.json({ errors: result.array() });
        let errorMessage = "";
        result.array().forEach((element) => {
          errorMessage += element + "\n";
        });
        return next(new HttpError(errorMessage, 422));
      }
      const { title, content, creationDate, userId } = req.body;
        
      const note = new Note({
        title,
        content,
        creationDate,
        userId,        
      });
    
      // console.log(note);
    //   let user = null;
    //   try {
    //     user = await User.findById(userId);
    //   } catch (error) {
    //     console.log(error);
    //     return next(
    //       new HttpError("users: something's wrong with the database!", 500)
    //     );
    //   }
    
    //   if (!user) {
    //     return next(
    //       new HttpError("the id provided for the user is not exist.", 404)
    //     );
    //   }
      try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await note.save({ session });
        // user.places.push(place);
        // await work.save({ session });
        await session.commitTransaction();
      }catch(err){
        console.log(err);
        return next(new HttpError("Adding new note was failed.", 500)); 
      }    
    
      res.status(201).json({ note: note });
}

exports.notes_getAll = notes_getAll;
exports.notes_addNew = notes_addNew;
