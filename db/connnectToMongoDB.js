import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ucsta_it:ucstait@cluster0.b1imoua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error connecting to mongoDB", error.message);
  }
};

export default connectToMongoDB;
