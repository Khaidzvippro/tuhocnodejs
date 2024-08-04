const express = require("express");
const {
  getHomePage,
  getABC,
  postCreateUser,
  postUpdateUser,
  getCreatePage,
  getUpdatePage,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

//router.Method("/route",handler)
router.get("/", getHomePage);

router.get("/hello", getABC);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);

router.post("/delete-user", postHandleRemoveUser);

module.exports = router; //export default
