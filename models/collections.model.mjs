import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const collectionsModel = {
  create: async function (folder) {
    let collection = await db.collection("collections");
    let result = await collection.insertOne(folder);
    return result;
  },

  delete: async function (id) {
    let collection = await db.collection("collections");
    const objectId = new ObjectId(id);
    const condition = { "_id": objectId };
    const result = await collection.deleteOne(condition);
    return result;
  },

  update: async function (id, entry) {
    let collection = await db.collection("collections");
    const objectId = new ObjectId(id);
    const result = await collection.updateOne({ "_id": objectId }, { $set: entry });
    return result;
  },

  getCollectionsByUsername: async function (username) {
    let collection = await db.collection("collections");
    let result = await collection.find({ username: username }).toArray();
    return result;
  }
}

export default collectionsModel;