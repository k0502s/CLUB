import express from 'express';
import Like from '../../models/Like.js';
import Dislike from '../../models/Dislike.js';
const router = express.Router();

router.post('/getLikes', async (req, res) => {
    try {
        let variable = {};
        if (req.body.photoId) {
            variable = { photoId: req.body.photoId };
        } else {
            variable = { commentId: req.body.commentId };
        }
        const likes = await Like.find(variable);
        res.status(200).json({ success: true, likes });
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

router.post('/getDislikes', async (req, res) => {
    try {
        let variable = {};
        if (req.body.photoId) {
            variable = { photoId: req.body.photoId };
        } else {
            variable = { commentId: req.body.commentId };
        }
        const dislikes = await Dislike.find(variable);
        res.status(200).json({ success: true, dislikes });
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

router.post('/upLike', async (req, res) => {
    try {
        let variable = {};
        if (req.body.photoId) {
            variable = { photoId: req.body.photoId, userId: req.body.userId };
        } else {
            variable = { commentId: req.body.commentId, userId: req.body.userId };
        }
        const like = new Like(variable);
        await like.save();
        await Dislike.findOneAndDelete(variable);
        res.status(200).json({ success: true });
    } catch (e) {
        console.log(e);
        return res.json({ success: false, err });
    }
});

router.post('/unLike', async (req, res) => {
    try {
        let variable = {};
        if (req.body.photoId) {
            variable = { photoId: req.body.photoId, userId: req.body.userId };
        } else {
            variable = { commentId: req.body.commentId, userId: req.body.userId };
        }
        await Like.findOneAndDelete(variable);
        res.status(200).json({ success: true });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ success: false, err });
    }
});

router.post('/unDisLike', async (req, res) => {
    try {
        let variable = {};
        if (req.body.photoId) {
            variable = { photoId: req.body.photoId, userId: req.body.userId };
        } else {
            variable = { commentId: req.body.commentId, userId: req.body.userId };
        }
        await Dislike.findOneAndDelete(variable);
        res.status(200).json({ success: true });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ success: false, err });
    }
});

router.post('/upDisLike', async (req, res) => {
    try {
        let variable = {};
        if (req.body.photoId) {
            variable = { photoId: req.body.photoId, userId: req.body.userId };
        } else {
            variable = { commentId: req.body.commentId, userId: req.body.userId };
        }
        const disLike = new Dislike(variable);
        await disLike.save();
        await Like.findOneAndDelete(variable);
        res.status(200).json({ success: true });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ success: false, err });
    }
});

export default router;
