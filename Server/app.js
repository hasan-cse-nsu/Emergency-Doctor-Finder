import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import router from './src/routes/api.js'



import {DATABASE, PORT, MAX_JSON_SIZE, URL_ENCODE, WEB_CACHE, REQUEST_NUMBER, REQUEST_TIME} from './src/config/config.js'


const app = express();


//Global Application Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());
app.use(cookieParser());

//Rate limiter
const limiter = rateLimit({windowMs: REQUEST_TIME, max: REQUEST_NUMBER});
app.use(limiter);


//Web Cashing
app.set('etag',WEB_CACHE);


//MongoDB Connection
mongoose.connect(DATABASE, {autoIndex: true}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB');
})


//Set API routes
app.use("/api", router);

//Run your express backend project
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
