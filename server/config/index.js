import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    googleProjectID: 'chat-307806',
    dialogFlowSessionID: 'bot-text',
    dialogFlowSessionLanguageCode: 'ko',
    googleClientEmail: 'chat-bot-test@chat-307806.iam.gserviceaccount.com',
    googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY,
};
