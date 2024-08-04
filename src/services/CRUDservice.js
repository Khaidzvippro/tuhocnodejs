const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM users");
  return results;
};
const getUserByID = async (userID) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM users WHERE id = ?",
    [userID]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
const updateUserByID = async (email, name, city, userID) => {
  let [results, fields] = await connection.execute(
    `UPDATE users
    SET email= ?,name = ?,city =? 
    WHERE id = ? `,
    [email, name, city, userID]
  );
};
const addNewUser = async (email, name, city) => {
  let [results, fields] = await connection.execute(
    `INSERT INTO users (email,name,city) VALUES(?,?,?)`,
    [email, name, city]
  );
};
const DeleteUserByID = async (id) => {
  let [results, fields] = await connection.execute(
    `DELETE FROM users WHERE id= ?`,
    [id]
  );
};
module.exports = {
  getAllUsers,
  getUserByID,
  updateUserByID,
  addNewUser,
  DeleteUserByID,
};
