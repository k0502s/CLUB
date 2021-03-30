import mongoose from 'mongoose';
import moment from 'moment';

//Create Schema
const CommentSchema = new mongoose.Schema({
    contents: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: moment().format('YYYY-MM-DD hh:mm'),
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    responseTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    writerName: { type: String },
});

const Comment = mongoose.model('comment', CommentSchema);

export default Comment;
