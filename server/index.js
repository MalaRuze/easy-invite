import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import TemplateModel from "./models/Templates.js";
import cors from "cors";
import path from "path";

const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "https://easyinvite.onrender.com",
  })
);

mongoose.connect(process.env.TEMPLATES_DB_URI);

app.get("/getTemplates", (req, res) => {
  TemplateModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
