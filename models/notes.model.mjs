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

  getUnsortedNotesByUsername: async function (username) {
    let collection = await db.collection("notes");
    let result = await collection.find({ username: username, collection: "unsorted" }).toArray();
    return result;
  }
}

export default notesModel;