import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User does not exist!" });
        }

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        // Generate token
        const payload = { id: user._id, isAdmin: user.isAdmin };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}