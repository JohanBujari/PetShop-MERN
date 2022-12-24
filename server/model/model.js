const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const PetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "Name must be uniqe"],
      required: [true, "Name is required"],
      minLength: [3, "Name must be at least 3 chars"],
    },
    petType: {
      type: String,
      required: [true, "Pet type is required"],
      minLength: [3, "Pet type must be at least 3 chars"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minLength: [3, "Description must be at least 3 chars"],
    },

    skill1: {
      type: String,
    },
    skill2: {
      type: String,
    },
    skill3: {
      type: String,
    },
  },
  { timestamps: true }
);
PetSchema.plugin(uniqueValidator);
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
