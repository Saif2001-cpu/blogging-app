import express from "express";
import { register } from "../controllers/authController.js";
import { optionalUpload } from "../middlewares/optionalUpload.js";

const router = express.Router();

// POST /api/auth/register
router.post('/register', optionalUpload, register);

export default router;