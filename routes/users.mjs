import express from "express";
import usersController from "../controllers/users.controller.mjs";

const router = express.Router();

// USER ROUTES
router.post("/", usersController.signup); // Create new user
router.post("/session", usersController.login) // Authenticate user

export default router;