import mongoose from "mongoose";
export async function connectDB() {
  const DB_URI = process.env.DB_URI;
  if (mongoose.connections[0].readyState) {
    return;
  } else {
    if (DB_URI) {
      const connection = await mongoose.connect(DB_URI);
      return connection;
    }
  }
}
