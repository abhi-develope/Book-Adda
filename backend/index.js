import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MOngoDBURI;

//connect to mongodb
try {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongodb");
} catch (error) {
  console.log("Error", error);
}

// defining routes
app.use("/book", bookRoute);
app.usde("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
