import mongoose from 'mongoose';

const likeSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        commentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment',
        },
        photoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'photo',
        },
    },
    { timestamps: true }
);

const Like = mongoose.model('like', likeSchema);

export default Like;
