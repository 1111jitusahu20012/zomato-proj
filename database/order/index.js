import mongoose from "mongoose";
 const ordersch = new mongoose.Schema(
   {
     user: {
       ftype: mongoose.Types.ObjectId,
       ref: " users",
     },
     orderitems: [
       {
         foods: { type: mongoose.Types.ObjectId, ref: "foods" },
         quantity: { type: Number, required: true },
         paymenetmode: { type: String, required: true },
         status: { type: String, default: "placed" },
         paymentdetails: {
           itmetotal: { type: Number, required: true },
           promo: { type: Number, required: true },
           tax: { type: Number, required: true },
         },
       },
     ],
     rating: { type: Number, required: true },
   },
   { timestamps: true }
 );
 export const ordermodel= mongoose.model("orders", ordersch) ;