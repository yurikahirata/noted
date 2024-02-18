import express from "express";
import usersController from "../controllers/users.controller.mjs";

const router = express.Router();

// USER ROUTES
router.get("/", usersController.getAll); // Get list of 50 users
router.post("/", usersController.signup); // Create new user

export default router;