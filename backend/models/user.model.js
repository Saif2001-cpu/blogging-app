import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/djg9iitcl/image/upload/v1630426754/placeholder-image_ufjv4t.png"
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

