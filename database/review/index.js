import mongoose  from "mongoose";
const reviewsch = mongoose.Schema(
  {
    food: {
      type: mongoose.Types.ObjectId,
      ref: "foods",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurants",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    ratingf: {
      type: Number,
      required: true,
    },
    photos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "images",
      },
    ],
    text: { type: String, required: true },
  },
  { timestamps: true }
);
export const reviewmodel= mongoose.model("reviews",reviewsch);