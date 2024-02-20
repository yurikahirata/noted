import express from "express";
import notesController from "../controllers/notes.controller.mjs";

const router = express.Router();

// USER ROUTES
router.get("/:username/unsorted", notesController.getUnsortedByUsername); // All unsorted notes by username
router.post("/", notesController.insert); // Create new note
router.delete("/:id", notesController.delete) // Delete note
router.patch("/:id", notesController.update); // Update note

export default router;