import express from 'express';

import Post from '../../models/post.js';
import Comment from '../../models/comment.js';
import User from '../../models/user.js';

import auth from '../../middleware/auth.js';
import moment from 'moment';
import '@babel/polyfill';

const router = express.Router();


// [Comments Route]

router.get('/:id/comments', async (req, res) => {
    try {
        const comment = await Post.findById(req.params.id).populate({
            path: 'comments',
        });
        const result = comment.comments;
        console.log(result, 'comment load');
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

router.post('/:id/comments', async (req, res) => {
    console.log(req, 'comments');
    const newComment = await Comment.create({
        contents: req.body.contents,
        writer: req.body.userId,
        writerName: req.body.userName,
        post: req.body.id,
        responseTo: req.body.responseTo,
        date: moment().format('YYYY-MM-DD hh:mm:ss'),
    });
    console.log(newComment, 'newComment');

    try {
        await Post.findByIdAndUpdate(req.body.id, {
            $push: {
                comments: newComment._id,
            },
        });
        await User.findByIdAndUpdate(req.body.userId, {
            $push: {
                comments: {
                    post_id: req.body.id,
                    comment_id: newComment._id,
                },
            },
        });
        res.json(newComment);
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

router.post('/comment/delete', async (req, res) => {
    try {
        console.log(req.body, 'delete');
        await Comment.deleteMany({ _id: req.body.commentId });
        await Post.findByIdAndUpdate(req.body.postId, {
            $pull: {
                comments: req.body.commentId,
            },
        });
        await User.findByIdAndUpdate(req.body.userId, {
            $pull: {
                comments: {
                    post_id: req.body.postId,
                    comment_id: req.body.commentId,
                },
            },
        });
        return res.json({ success: true });
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

router.post('/comment/edit', async (req, res) => {
    try {
        const Edi = req.body.contents
        const editcomment = await Comment.findByIdAndUpdate(req.body.commentId, {
            contents: Edi
        });
        console.log(editcomment, 'editcomment');
        return res.json(editcomment);
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

export default router;