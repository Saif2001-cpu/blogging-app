import express from "express";
import { register } from "../controllers/authController.js";

//Create a new router
const router = express.Router();

//creating api end point for register
router.post("/register", register);

export default router;