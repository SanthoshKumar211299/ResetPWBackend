import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

/*const mongoDB_URL = process.env.MONGODB_URl;

const connectDB = async (req, res) => {
  try {
    const connection = await mongoose.connect(mongoDB_URL);
    console.log("MongoDB connected Successfully");
    return connection;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Mongo DB connection Error" });
  }
};

export default connectDB;*/
// config.js


//dotenv.config();


mongoose.set("strictQuery",false);
const connectDB = async () => {
  try {
    const connection =await mongoose.connect(process.env.MONGODB_URL)

     console.log('Mongoose connected successfully');
     return  connection;
  } catch (error) {
    console.log('MongoDB Connection failed');
  }
};

export default connectDB;
