import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./route/book.route.js";

const app = express();

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
