import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MOngoDBURI;

//connect to mongodb
try {
  
} catch (error) {
  
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
