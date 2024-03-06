import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    parentEmail: {
      type: String,
      unique: true,
      required: true,
    },
  },
  //createdAt, updatedAt => Member Since <createdAt> <date>
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
