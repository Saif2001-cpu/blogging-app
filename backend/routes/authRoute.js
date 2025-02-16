import express from "express";
import { register } from "../controllers/authController.js";
import { optionalUpload } from "../middlewares/optionalUpload.js";
import { login } from "../controllers/authLoginController.js";

const router = express.Router();

// POST /api/auth/register
router.post('/register', optionalUpload, register);

// POST /api/auth/login
router.post('/login', login);

export default router;