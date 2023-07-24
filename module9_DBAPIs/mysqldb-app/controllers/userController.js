"use strict";

const Models = require("../models");
const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createUsers = (data, res) => {
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateUser = (req, res) => {
  Models.User.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  getUsers,
  createUsers,
  updateUser,
  deleteUser
};


// "use strict";
// const Models = require("../models");
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const multer = require('multer')

// const getUsers = (res) => {
//     Models.User.findAll({}).then(function (data) {
//         res.status(200).json({ result: 'User data fetched successfully', data: data })
//     }).catch(err => {
//         res.status(500).json({ result: err.message })
//     })
// }

// // creates a JWT token and encrypts the password
// // https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
// const loginUser = async (req, res) => {
//     try {
//         // Get user input from request body
//         const { email, password } = req.body;

//         // Validate user input
//         if (!(email && password)) {
//             res.status(400).json({ result: "All input is required" });
//         }
//         // Validate if user exists in our database
//         const user = await Models.User.findOne({ where: { emailId: email }});

//         // if they do exist, make sure their password matches - need to check encrypted version of password
//         if (user && (await bcrypt.compare(password, user.password))) {
//             // Create token for use based on their id and email
//             const token = jwt.sign(
//                 { user_id: user.id, email },
//                 process.env.JWT_KEY,
//                 {
//                     expiresIn: "2h",
//                 }
//             );

//             // send back logged in user details including token
//             res.status(200).json({ result: 'User successfully logged in', data: user, token: token });
//         }
//         else res.status(400).json({ result: "Invalid user credentials" });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ result: err.message })
//     }
// }

// // registers a new user by validating their details, encrypting their password, and generating a token
// const registerUser = async (req, res) => {

//     try {
//         // Get user input by destructuring request body
//         const { firstName, lastName, emailId, password } = req.body;

//         // Validate user input
//         if (!(emailId && password && firstName && lastName)) {
//             res.status(400).json("All input is required");
//         }

//         // Validate if user exists in our database
//         const oldUser = await Models.User.findOne({ where: { emailId }});

//         if (oldUser) {
//             res.status(409).json({ result: "User already exists. Please login" });
//         }

//         //Encrypt user password
//         let encryptedPassword = await bcrypt.hash(password, 10);

//         // Create user in our database
//         const user = await Models.User.create({
//             firstName,
//             lastName,
//             emailId: emailId.toLowerCase(), // sanitize: convert email to lowercase
//             password: encryptedPassword,
//         });

//         // Create token
//         const token = jwt.sign(
//             { user_id: user.id, emailId },
//             process.env.JWT_KEY,
//             {
//                 expiresIn: "2h",
//             }
//         );
//         // save user token
//         user.token = token;

//         // return new user
//         res.status(201).json({ result: "User successfully registered", data: user });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ result: err.message })
//     }
// }

// const createUser = (data, res) => {
//     Models.User.create(data).then(function (data) {
//         res.status(200).json({ result: 'User created successfully', data: data })
//     }).catch(err => {
//         res.status(500).json({ result: err.message })
//     })
// }

// const updateUser = (req, res) => {
//     Models.User.update(req.body, {
//         where: {
//             id: req.params.id
//         }
//     }).then(function (data) {
//         res.status(200).json({ result: 'User updated successfully', data: data })
//     }).catch(err => {
//         res.status(500).json({ result: err.message })
//     })
// }

// const deleteUser = (req, res) => {
//     Models.User.destroy({
//         where: { id: req.params.id }
//     }).then(function (data) {
//         res.status(200).json({ result: 'User deleted successfully', data: data })
//     }).catch(err => {
//         res.status(500).json({ result: err.message })
//     })
// }

// //upload an image from a front-end form onto the back end server: https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/
// const addProfileImage = (req, res) => {

//     console.log(req.file) // saved filename is in req.file.filename
//     const userUpdates = { profilePhoto: process.env.IMAGE_PATH + req.file.filename, profilePhotoTitle: req.body.imageTitle };
//     //save path to uploaded file in DB
//     Models.User.update(
//         userUpdates, 
//         { where: { id: req.params.userId } }
//     ).then(response => 
//         res.status(200).json({ result: 'Image uploaded to profile successfully', data: userUpdates }) // send updated info back in response
//     ).catch(err => 
//         res.status(500).json({ result: err.message })
//     )
// }

// module.exports = {
//     getUsers, loginUser, registerUser, createUser, updateUser, deleteUser, addProfileImage
// }
