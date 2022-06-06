import mongoose from "mongoose";
const imagesh = new mongoose.Schema(
  {
    images: [
      {
        location: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);
 export const imagemodel= mongoose.model("images",imagesh);