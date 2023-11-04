import { Schema, model, models } from "mongoose";
const schema = new Schema({
  content: { type: String, uppercase: true },
  created_at: { type: Date, default: () => Date.now() },
  modified_at: { type: Date, default: () => Date.now() },
});
export const DiaryModel = models["diary"] || model("diary", schema);
