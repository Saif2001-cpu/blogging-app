import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinaryV2 from "../config/cloudinary.js";

// Configure Multer for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinaryV2,
    params: {
        folder: 'user_images',
        allowedFormats: ['jpg', 'jpeg', 'png'],
    },
});

const upload = multer({ storage });

// Custom middleware to handle optional file uploads
export const optionalUpload = (req, res, next) => {
    upload.single('image')(req, res, (err) => {
        console.log("Middleware - Request Body:", req.body);
        console.log("Middleware - Uploaded File:", req.file);

        if (err instanceof multer.MulterError && err.code === 'LIMIT_UNEXPECTED_FILE') {
            // If no file is uploaded, continue without error
            req.file = null;
            next();
        } else if (err) {
            // Pass other errors to the error handler
            console.error("Middleware Error:", err);
            next(err);
        } else {
            // File uploaded successfully, proceed
            next();
        }
    });
};