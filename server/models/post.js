import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import moment from 'moment';
import Counter from './counter.js';

//Create Schema
const PostSchema = new mongoose.Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    writerName: {
        type: String,
    },
    numberId: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
        index: true, //검색의 원활을 위함
    },
    contents: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: -2, //작성하는 사람 조회 뺴기 위함
    },
    fileUrl: {
        type: String,
        default: 'https://source.unsplash.com/random/301x201',
    },
    category: {
        type: Number,
        default: 1,
    },
    date: {
        type: String,
        default: moment().format('YYYY-MM-DD hh:mm'),
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment',
        },
    ],
});

PostSchema.pre('save', async function (next) {
    var post = this;
    console.log(post, 'post');
    if (post.isNew) {
        if (post.category === 1) {
            const counter = await Counter.findOne({ name: 'posts' }).exec();
            if (!counter) counter = await Counter.create({ name: 'posts' });
            counter.count++;
            counter.save();
            post.numberId = counter.count;
        } else {
            const counter_2 = await Counter.findOne({ name: 'posts_2' }).exec();
            if (!counter_2) counter_2 = await Counter.create({ name: 'posts_2' });
            counter_2.count++;
            counter_2.save();
            post.numberId = counter_2.count;
        }
    }
    return next();
});

PostSchema.plugin(mongoosePaginate);

const Post = mongoose.model('post', PostSchema);

export default Post;
