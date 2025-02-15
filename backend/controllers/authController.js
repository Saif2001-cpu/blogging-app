import { User } from "../models/user.model.js";
import brcypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists!" });
        }

        //hash password
        const hashedPassword = await brcypt.hash(password, 10);

        //create user 
        user = await User.create({
            username,
            email,
            password: hashedPassword,
        })

        //save the user to the database
        await user.save();

        res.status(201).json({ message: "User created successfully!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}
