import express from "express";
import collectionsController from "../controllers/collections.controller.mjs";

const router = express.Router();

// COLLECTIONS ROUTES
router.post("/username", collectionsController.getCollectionsByUsername); // All collections by username
router.post("/", collectionsController.insert); // Create new collection
router.delete("/:id", collectionsController.delete) // Delete collection
router.patch("/:id", collectionsController.update); // Update collection

export default router;