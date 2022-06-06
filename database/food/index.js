import mongoose from "mongoose";

const foodsch = new mongoose.Schema({
  name: { type: String, required: true },
  des: { type: String, required: true },
  isveg: { type: Boolean, required: true },
  price: { type: Number, required: true, default: 150 },
  image: {
    type: mongoose.Types.ObjectId,
    ref: "images",
  },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "restaurants",
    required: true,
  },
  addons: {
    type: mongoose.Types.ObjectId,
    ref: "foods",
  },
},{timestamps:true});
export const foodmodel= mongoose.model("foods",foodsch);