const router = require("express").Router();
const authController = require("../controllers/auth.controller");
//const userController = require("../controllers/user.controller");

//const multer = require("multer");

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user DB
router.get("/", authController.getAllUsers);
router.get("/:id", authController.userInfo);
/*router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);*/

// upload
module.exports = router;

//module.exports = router;
