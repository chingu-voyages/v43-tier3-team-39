// const express = require("express");
// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// const User = require("../models/User");
// // const Photo = require("../Models/Photo");

// passport.use(
//   new GoogleStrategy(
//     // configuration object
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//       callbackURL: process.env.CALLBACKKEY,
//     },
//     // passport verify callback
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         // checks if user Google account already exists in db
//         const existingGoogleAccount = await User.findOne({
//           googleAuthId: profile.id,
//         });
//         // checks if there's user with the email in the db
//         if (!existingGoogleAccount) {
//           const existingEmailAccount = await User.findOne({
//             email: profile.emails[0].value,
//           });
//           // create a new user in the db
//           if (!existingEmailAccount) {
//             const newAccount = await User.create({
//               firstName: profile.name.givenName,
//               lastName: profile.name.familyName,
//               googleAuthId: profile.id,
//               email: profile.emails[0].value,
//               zipCode: 0,
//               radius: 0,
//               bio: "",
//               profession: "",
//             });
//             // returns new account after being created
//             console.log("new account! google login successful!");
//             return done(null, newAccount);
//           }
//           // if email exists in the database, return existing email account
//           console.log("existing user! google login successful!");
//           return done(null, existingEmailAccount);
//         }
//         // if user with googleId existed, return Google account
//         console.log("google login successful!");
//         return done(null, existingGoogleAccount);
//       } catch (error) {
//         console.log(error);
//         throw new Error(error);
//       }
//     }
//   )
// );

// // determines which data of the user object should be stored in the session - user.id
// passport.serializeUser((user, done) => {
//   done(null, user._id);
// });

// // retrieves the id stored in the session - backend call to get user instance
// // by the user.id and attach it to the request object as req.user
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });
