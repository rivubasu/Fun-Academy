import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  //createdAt, updatedAt => Member Since <createdAt> <date>
  { timestamps: true }
);

const Parent = mongoose.model("Parent", parentSchema);

export default Parent;
