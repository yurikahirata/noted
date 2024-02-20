import express from "express";
import collectionsController from "../controllers/collections.controller.mjs";
// import notesController from "../controllers/notes.controller.mjs";

const router = express.Router();

// USER ROUTES
router.get("/:username", collectionsController.getCollectionsByUsername); // All collection by username
router.post("/", collectionsController.insert); // Create new folder
router.delete("/:id", collectionsController.delete) // Delete folder
router.patch("/:id", collectionsController.update); // Update folder

export default router;