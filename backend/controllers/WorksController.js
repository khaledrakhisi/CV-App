const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/HttpError");
const Work = require("../models/Work");

async function works_getAll(req, res, next){

    let works = null;
    try {
      works = await Work.find({});
    } catch (err) {
      console.log(err);
      return next(
        new HttpError("works ctrler: something's wrong with the database!", 500)
      );
    }
  
    if (!works || works.length === 0) {
      return next(new HttpError("no work project found.", 500));
    }
    // console.log(works);
    res.status(200).json({works: works.map((item) => item.toObject({ getters: true }))});
}

async function works_addNew(req, res, next){
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
      const { title, description, technicalInfo, images, duration, contractor, links, tags } = req.body;
    // console.log(duration);
    //   let coordinates = null;
    //   try {
    //     coordinates = await geocoding.geocode(address);
    //     console.log(coordinates);
    //   } catch (err) {
    //     return next(err);
    //   }
          
    //   const place = new Place({
    //     // id: uuid_v4(),
    //     title,
    //     description,
    //     technicalInfo: technicalInfo,
    //     imageUrl:
    //       "https://lp-cms-production.imgix.net/image_browser/NYC%20skyline%20-%20free%20things.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1",
    //     address,
    //     userId,
    //   });

      const work = new Work({
        title,
        description,
        technicalInfo,
        images,
        duration,
        contractor,
        links,
        tags,
      });
    
      console.log(work);
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
        await work.save({ session });
        // user.places.push(place);
        // await work.save({ session });
        await session.commitTransaction();
      }catch(err){
        console.log(err);
        return next(new HttpError("adding new work was failed.", 500)); 
      }    
    
    //   try {
    //     const session = await mongoose.startSession();
    //     session.startTransaction();
    //     await place.save({ session });
    //     user.places.push(place);
    //     await user.save({ session });
    //     await session.commitTransaction();
    //   } catch (err) {
    //     console.log(err);
    //     return next(new HttpError("adding new place was failed.", 500));
    //   }
    
      res.status(201).json({ work });
}

exports.works_getAll = works_getAll;
exports.works_addNew = works_addNew;