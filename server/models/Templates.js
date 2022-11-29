import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  headingStart: {
    type: String,
  },
  headingEnd: {
    type: String,
  },
  date: {
    type: String,
  },
  location: {
    type: String,
  },
  locationLink: {
    type: String,
  },
  description: {
    type: String,
  },
});

const TemplateModel = mongoose.model("Templates", TemplateSchema);

export default TemplateModel;
