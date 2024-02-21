import notesModel from "../models/notes.model.mjs";
import { validateNote } from "../util/noteValidation.mjs";

const notesController = {
  insert: async function (req, res) {
    const newNote = req.body;
    if (!validateNote(newNote)) {
      res.status(400).send("Invalid input");
    } else {
      let results = await notesModel.create(newNote);
      if (results.hasOwnProperty("insertedId"))
        res.status(200).send(results);
      else
        res.status(500).send("Something went wrong");
    }
  },

  update: async function (req, res) {
    const id = req.params.id;
    const entry = req.body;
    let result = await notesModel.update(id, entry);
    res.status(200).send(result);
  },

  delete: async function (req, res) {
    const id = req.params.id;
    let result = await notesModel.delete(id);
    if (result.deletedCount === 1)
      res.status(200).send(result);
    else
      res.status(500).send("Something went wrong");
  },

  getNotesByUsernameAndCollection: async function (req, res) {
    const username = req.params.username;
    const collection = req.params.collection;
    let results = await notesModel.getNotesByUsernameAndCollection(username, collection);
    res.status(200).send(results);
  },

  deleteByUsernameAndCollection: async function (req, res) {
    const username = req.params.username;
    const collection = req.params.collection;
    let result = await notesModel.deleteByUsernameAndCollection(username, collection);
    if (result.acknowledged === true)
      res.status(200).send(result);
    else
      res.status(500).send("Something went wrong");
  }
}

export default notesController;