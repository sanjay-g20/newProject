const mongoose = require("mongoose");

const projectsModel = mongoose.Schema(
  {
    project_name : {
      type: String,
    //   required: [true, "Please add the contact name"],
    },
    project_ID: {
      type: String,
    //   required: [true, "Please add the contact email address"],
    },
    project_description: {
      type: String,
    //   required: [true, "Please add the contact description number"],
    },
    sills_required: {
        type: String,
      //   required: [true, "Please add the contact skills number"],
      },
    qualification:{
        type: String,
        //   required: [true, "Please add the contact qualification number"],
        },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Projects", projectsModel);
