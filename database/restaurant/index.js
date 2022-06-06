import mongoose from "mongoose";

const restaurantsch = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mapLocation: {
      type: String,
      required: true,
    },
    cuisine: { String },
    timing: { String },
    ph_no: { Number },
    Website: { Number },

    avgcost: Number,
    menuimg: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },

    menu: {
      type: mongoose.Types.ObjectId,
      ref: "menus",
    },
    photo: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "reviews",
    },
  },
  { timestamps: true }
);
export const restarantmodel= mongoose.model("resataurents",restaurantsch);