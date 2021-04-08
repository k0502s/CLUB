import express from 'express';
import mongoose from 'mongoose';
import config from './config/index.js';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';


import userRoutes from './routes/api/user.js';
import authRoutes from './routes/api/auth.js';
import chatbotRoutes from './routes/api/chatbot.js';
import photoRoutes from './routes/api/photo.js';
import likeRoutes from './routes/api/like.js';
import postRoutes from './routes/api/post.js';

import morgan from 'morgan';

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());

app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev')); //개발 log을 보여줌

app.use(express.json());

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log('MongoDB connection Success'))
    .catch((e) => console.log(e));

// Use routes
app.get('/');
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/photo', photoRoutes);
app.use('/api/like', likeRoutes);
app.use("/api/post", postRoutes);

export default app;
