import express from "express";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
//model
import { usermodel } from "../../database/user";
import passport from "passport";
const Router = express.Router();
/*
Route     /signup
Des       Register new user
Params    none
Access    Public
Method    POST  
*/
Router.post("/signup", async (req, res) => {
  try {

    //check user
    const user = await usermodel.FIndbymailandphno({ email, ph_no });

    //save db
    const newuser = await usermodel.create(req.body.credentials);
    //generate a jwt
    const token = newuser.generatetoken();
    return res.status(200).json({ token, status: "successs" });
  } catch (error) {
    return res.status(500).json({ error: error.massage });
  }
});
/*
Route     /signin
Des       Signin with email and password
Params    none
Access    Public
Method    POST  
*/
Router.post("/signin", async (req, res) => {
  try {
    const doseuser =
      await usermodel.FIndbymailandpassword({ email, ph_no });

    //save db
    const newuser = await usermodel.create(req.body.credentials);
    //generate a jwt
    const token = newuser.generatetoken();
    return res.status(200).json({ token, status: "successs" });
  } catch (error) {
    return res.status(500).json({ error: error.massage });
  }
}); /*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  
*/
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      " https://www.googleapis.com/auth/userinfo.profile",
      " https://www.googleapis.com/auth/userinfo.email",
    ],
  }));/*
Route     /google/callback
Des       Google Signin Callback
Params    none
Access    Public
Method    GET  
*/
Router.get(
  "/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
  (req,res)=>{
    res.json{
      token:req.sesion.p
    }
  }
)
);
export default Router;
