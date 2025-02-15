import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Get image URL from Cloudinary (or use a default image if no file is uploaded)
        const imageUrl = req.file
            ? req.file.path
            : "https://res.cloudinary.com/djg9iitcl/image/upload/v1630426754/placeholder-image_ufjv4t.png";

        // Create user
        user = await User.create({
            username,
            email,
            password: hashedPassword,
            image: imageUrl,
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({ message: "User created successfully!", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
};