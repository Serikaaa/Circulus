import express from "express";
import {
  getUser,
  findUser,
  update,
  deleteUser,
  follow,
  unFollow,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyToken, update);

// Get User
router.get("/find/:id", getUser);

// Find User
router.get("/findName/:username",findUser);

// Delete User
router.delete("/:id", verifyToken, deleteUser);

// Follow
router.put("/follow/:id", verifyToken, follow);

// Unfollow
router.put("/unfollow/:id", verifyToken, unFollow);

export default router;
