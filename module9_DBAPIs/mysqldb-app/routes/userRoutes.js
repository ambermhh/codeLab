const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});
router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});
module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Controllers = require("../controllers");
// const auth = require("../middleware/auth");
// const uploadFile = require("../middleware/uploads");

// router.get('/', auth, (req, res) => {
//     Controllers.userController.getUsers(res);
// })

// router.post('/login', (req, res) => {
//     Controllers.userController.loginUser(req, res)
// })

// router.post('/create', (req, res) => {
//     Controllers.userController.createUser(req.body, res)
// })

// router.post('/register', (req, res) => {
//     Controllers.userController.registerUser(req, res)
// })

// router.put('/:id', (req, res) => {
//     Controllers.userController.updateUser(req, res)
// })

// router.delete('/:id', (req, res) => {
//     Controllers.userController.deleteUser(req, res)
// })

// router.post('/:userId/image/', uploadFile, (req, res) => { // uses multer middleware function to upload images before controller function runs
//     Controllers.userController.addProfileImage(req, res)
// })

// module.exports = router;
