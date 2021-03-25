import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import moment from 'moment';

// Create Schema
const PhotoSchema = new mongoose.Schema(
    {
        writer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        title: {
            type: String,
            maxlength: 50,
        },
        description: {
            type: String,
        },
        images: {
            type: Array,
            default: "https://jinseokproject1.s3.ap-northeast-2.amazonaws.com/upload/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C1616574043207.png",
        },
        genres: {
            type: Number,
            default: 1,
        },
        views: {
            type: Number,
            default: -1,
        },
        date: {
            type: String,
            default: moment().format("YYYY-MM-DD hh:mm")
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "comment"
            }
        ],
    },
    { timestamps: true }
);



PhotoSchema.plugin(mongoosePaginate);

const Photo = mongoose.model('photo', PhotoSchema);

export default Photo;