import express from 'express';
import dotenv from 'dotenv';
import streamRoutes from './routes/stream.route.js';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: '*',
    credentials: true 
};

app.use(cors(corsOptions));
app.use(helmet()); 
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());   

app.use('/v1/stream-package', streamRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
