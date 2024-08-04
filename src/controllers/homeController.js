const { json } = require("express");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserByID,
  updateUserByID,
  addNewUser,
  DeleteUserByID,
} = require("../services/CRUDservice");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserByID(userID);
  res.render("edit.ejs", { userEdit: user });
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log("email = ", email, "name = ", name, "city = ", city);
  await addNewUser(email, name, city);
  console.log(">>check:", results);
  res.send("Created user succeed");
};
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userID = req.body.userID;
  await updateUserByID(email, name, city, userID);
  // res.send("Updated user succeed");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserByID(userID);
  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userID;
  await DeleteUserByID(id);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
  getCreatePage,
  getUpdatePage,
};
