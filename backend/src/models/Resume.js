const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const resumeSchema = mongoose.Schema({
    main: {
      name: { type: String, required: true },
      occupation: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      bio: { type: String, required: true },
      contactmessage: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
      },
      website: { type: String, required: true },
      resumedownload: { type: String, required: true },
      social: [
        {
          name: { type: String, required: true },
          url: { type: String, required: true },
          className: { type: String, required: true }
        },       
      ]
    },
    resume: {
      skillmessage: { type: String, required: true },
      education: [
        {
          school: { type: String, required: true },
          degree: { type: String, required: true },
          graduated: { type: String, required: true },
          description: { type: String, required: true }
        },        
      ],
      work: [
        {
          company: { type: String, required: true },
          title: { type: String, required: true },
          years: { type: String, required: true },
          description: { type: String, required: true }
        },        
      ],
      skills: [
        {
          name: { type: String, required: true },
          level: { type: String, required: true }
        },        
      ]
    },
    portfolio: {
      projects: [
        {
          title: { type: String, required: true },
          category: { type: String, required: true },
          image: { type: String, required: true },
          url: { type: String, required: true }
        },        
      ]
    },
    testimonials: {
      testimonials: [
        {
          text: { type: String, required: true },
          user: { type: String, required: true }
        },       
      ]
    }
});

resumeSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Resume", resumeSchema);
