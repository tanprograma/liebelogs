import { Schema, model, models } from "mongoose";
const schema = new Schema({
  content: { type: String },
  title: String,
  category: String,
  created_at: { type: Date, default: () => Date.now() },
  last_modified: { type: Date, default: () => Date.now() },
});
export const LogModel = models["log"] || model("log", schema);
