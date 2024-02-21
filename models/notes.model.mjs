import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const notesModel = {
  create: async function (note) {
    let collection = await db.collection("notes");
    let result = await collection.insertOne(note);
    return result;
  },

  delete: async function (id) {
    let collection = await db.collection("notes");
    const objectId = new ObjectId(id);
    const condition = { "_id": objectId };
    const result = await collection.deleteOne(condition);
    return result;
  },

  update: async function (id, entry) {
    let collection = await db.collection("notes");
    const objectId = new ObjectId(id);
    const result = await collection.updateOne({ "_id": objectId }, { $set: entry });
    return result;
  },

  getNotesByUsernameAndCollection: async function (username, collection) {
    let dbCollection = await db.collection("notes");
    let result = await dbCollection.find({ username: username, collection: collection }).toArray();
    return result;
  },

  deleteByUsernameAndCollection: async function (username, collection) {
    let dbCollection = await db.collection("notes");
    const condition = { "username": username, "collection": collection };
    const result = dbCollection.deleteMany(condition);
    return result;
  },

  editByUsernameAndCollection: async function (username, collection, toEdit) {
    let dbCollection = await db.collection("notes");
    const condition = { "username": username, "collection": collection };
    const updateTo = { $set: toEdit };
    const result = dbCollection.updateMany(condition, updateTo);
    return result;
  }
}

export default notesModel;