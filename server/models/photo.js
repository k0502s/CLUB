import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import moment from 'moment';

// Create Schema
const PhotoSchema = new mongoose.Schema(
    {
        writer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
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
            default: [],
        },
        continents: {
            type: Number,
            default: 1,
        },
        views: {
            type: Number,
            default: -2,
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

// //서치 기능을 위해 DB모델에서 따로 설정
// productSchema.index({
//     title:'text',
//     description:'text'
// },{
//     weights:{
//         title: 5, //title 값이 더 크다는 의미는 검색시 타이틀을 더 우선시 한다는 의미.
//         description: 1
//     }
// })

PhotoSchema.plugin(mongoosePaginate);

const Photo = mongoose.model('photo', PhotoSchema);

export default Photo;