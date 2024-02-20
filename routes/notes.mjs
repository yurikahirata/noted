import express from "express";
import notesController from "../controllers/notes.controller.mjs";

const router = express.Router();

// USER ROUTES
router.get("/:username/unsorted", notesController.getUnsortedByUsername);
router.post("/", notesController.insert); // Create new note
router.delete("/:id", notesController.delete) // Authenticate user
router.patch("/:id", notesController.update);

export default router;