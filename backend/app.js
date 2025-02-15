import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoute from './routes/authRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Database connection
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Database connected successfully!');
    }).catch((error) => {
        console.log('Error:', error.message);
    });
}

connectDB();

//Routes
app.use('/api/auth', authRoute);

//Server
app.listen(PORT, () => {
    console.log('Server is running on :', `${PORT}`);
});

export default app;