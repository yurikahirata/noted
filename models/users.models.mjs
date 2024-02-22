import db from "../db/conn.mjs";

const usersModel = {

  create: async function (user) {
    let collection = await db.collection("users");
    let result = await collection.insertOne(user);
    return result;
  },

  getByUsername: async function (username) {
    let collection = await db.collection("users");
    let result = await collection.find({ username: username }).toArray();
    return result;
  }
}

export default usersModel;