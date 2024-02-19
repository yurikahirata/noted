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

  delete: async function (req, res) {
    const id = req.params.id;
    let result = await notesModel.delete(id);
    if (result.deletedCount === 1)
      res.status(200).send(result);
    else
      res.status(500).send("Something went wrong");
  },

  getUnsortedByUsername: async function (req, res) {
    const username = req.params.username;
    let results = await notesModel.getUnsortedNotesByUsername(username);
    res.status(200).send(results);
  }
}

export default notesController;