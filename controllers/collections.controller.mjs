import collectionsModel from "../models/collections.model.mjs";
import { validateCollection } from "../util/collectionValidation.mjs";

const collectionsController = {
  insert: async function (req, res) {
    const newCollection = req.body;
    if (!validateCollection(newCollection)) {
      res.status(400).send("Invalid input");
    } else {
      let results = await collectionsModel.create(newCollection);
      if (results.hasOwnProperty("insertedId"))
        res.status(200).send(results);
      else
        res.status(500).send("Something went wrong");
    }
  },

  update: async function (req, res) {
    const id = req.params.id;
    const entry = req.body;
    let result = await collectionsModel.update(id, entry);
    res.status(200).send(result);
  },

  delete: async function (req, res) {
    const id = req.params.id;
    let result = await collectionsModel.delete(id);
    if (result.deletedCount === 1)
      res.status(200).send(result);
    else
      res.status(500).send("Something went wrong");
  },

  getCollectionsByUsername: async function (req, res) {
    const username = req.body["username"];
    let results = await collectionsModel.getCollectionsByUsername(username);
    res.status(200).send(results);
  }
}

export default collectionsController;