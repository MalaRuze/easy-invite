import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  date: {
    type: String,
  },
  location: {
    type: String,
  },
});

const TemplateModel = mongoose.model("Templates", TemplateSchema);

export default TemplateModel;
