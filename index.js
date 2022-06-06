// Importing Env Variables

import express  from "express"; 
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import connectdb from "./database/conection";
import auth from "./api/auth";
import passport from "passport";
//import GOOGLEJS from "./CONFIG/GOOGLE.JS";
require("dotenv").config();
const  zomato=express();

// application middlewares

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use("/auth",auth);
//paspaort 
//GOOGLEJS(passport);

zomato.get("/",(req,res)=> res.json({massage:"hello "}));
zomato.listen(4000,()=> connectdb().then(()=> console.log("runing")).catch(()=>
console.log("data connetion is failled but ser veris running"))
);
