import mongoose from 'mongoose';

const ChatSchema = mongoose.Schema(
    {
        name: String,
        opinion: String,
        email: String,
        registerDate: Date,
        text: String,
    },
    { timestamps: true }
);

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;
