import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get list of 50 users
router.get("/", async (req, res) => {
  console.log("Connected to mongodb");
  let collection = await db.collection("users");
  let results = await collection.find({})
    .limit(50)
    .toArray();

  res.send(results).status(200);
});

export default router;