import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import userrouter from './Routers/userRouter.js'


dotenv.config();

const app = express();
const port =process.env.PORT || 8000;
//middle ware
app.use(express.json());
const
  corsOption={
    origin: true,
    credentials: true,
  };
app.use(cors(corsOption));
//routes
app.use("/api", userrouter);


app.get("/", (req, res) => {
  res.status(200).send("API running Successfully");
});

//Port
app.listen(port, () => {
  connectDB();
  console.log("App is running on");
});