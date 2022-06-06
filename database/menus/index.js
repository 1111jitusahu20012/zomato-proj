import mongoose from "mongoose";
const menu_sch = new mongoose.Schema(
  {
    menu: [
      {
        name: { type: String, required: true },
        items: [
          {
            type: mongoose.Types.ObjectId,
            ref: "foods",
          },
        ],
      },
    ],
    recomended: [
      {
        type: mongoose.Types.ObjectId,
        ref: "foods",
        unique: true,
      },
    ],
  },
  { timestamps: true }
);
export const menumodel = mongoose. model(" menus",menu_sch);