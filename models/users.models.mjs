import db from "../db/conn.mjs";

const usersModel = {
  getAll: async function () {
    let collection = await db.collection("users");
    let results = await collection.find({})
      .limit(50)
      .toArray();
    return results;
  },

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