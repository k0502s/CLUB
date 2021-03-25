import mongoose from 'mongoose';

const dislikeSchema = mongoose.Schema(
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

const Dislike = mongoose.model('dislike', dislikeSchema);

export default Dislike;
