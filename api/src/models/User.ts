import { Schema, model } from "mongoose";

interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  created: Date;
}

// schema corresponding to the document interface
const userSchema = new Schema<UserInterface>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

// creating model
/**
 * The first parameter of the model is the model name then the schema definition
 * */

const User = model<UserInterface>("User", userSchema);

module.exports = User;
