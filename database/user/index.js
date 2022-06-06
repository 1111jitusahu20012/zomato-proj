import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
const usersch = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    ph_no: [{ type: Number }],
  },
  { timestamps: true }
);
usersch.statics.FIndbymailandphno = async (email, ph_no) => {
  const checkusermail = await usermodel.findOne(email);
  const checkuserphno = await usermodel.findOne(ph_no);
  if (checkusermail || checkuserphno) {
    throw new Error(" aa useer");
  }return false;
};
usersch.pre("save", function(next){
  const user = this;
  if (!user.isModified("password"))return next();
  bcrypt.genSalt(8,(error, salt)=>{

  bcrypt.hash(user.password,salt,(error , hash)=>{
    if (error) return next(error);
    user.password= hash;
    return next()
    ;
  });
  });
});
usersch.methods. generatetoken= function(){
  return jwt.sign({  user:this._id.tostring()},zom);
}
usersch.statics.FIndbymailandpassword= async({email, password})=>{ const user = await usermodel.findOne(email);
  if(!checkusermail) throw new Error("user dose noexist");
//comare passsword
const checkuserpasswordmatch =await bcrypt.compare(
  password,
 user.password
);if(!checkuserpasswordmatch) throw new Error("invalid pasword");
return user
}
export const usermodel = mongoose.model("users", usersch);
