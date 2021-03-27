import mongoose from 'mongoose';


const counterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 0,
    },
});


const Counter = mongoose.model('counter', counterSchema);

export default Counter;
