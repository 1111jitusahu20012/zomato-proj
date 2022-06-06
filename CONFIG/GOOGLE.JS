import  Jwt  from "jsonwebtoken";
import passport from "passport";
import goo from "passport-google-oauth20";
import {} from "../database/all model";
import { usermodel } from "../database/user";
const googlest = goo.Strategy;

export default (passport) => {
  passport.use(
    new googlest(
      {
        clientid: process.env.GOOGLE_CLI ,
        clientsec: process.env.GOOGLE__PASS,
        callbackurl: "http://localhost:4000/auth/google/callback",
      },
      async (accessstoken, refreshtoen, profile, done) => {
        const newsuer = {
          fullname: profile.displayname,
          email: profile.email[0].value,
          profilepic: profile.photos[0].value,
        };
        try {
          const user = await usermodel.findOne({ eamil: newsuer.email });
          const token = user.generatetoken();
          if (user) {
            done(null, { user, token });
          } else {
            const user = await usermodel.create(newsuer);
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );
  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.serializeUser((_id, done) => done(null, id));
};
