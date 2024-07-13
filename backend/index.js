import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MOngoDBURI;

//connect to mongodb
try {
  mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
  console.log("Connected to mongodb");
} catch (error) {
  console.log("Error", error);
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
