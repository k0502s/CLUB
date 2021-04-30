import express from 'express';
import Map from '../../models/map.js';

const router = express.Router();

router.get('/address', async (req, res) => {
    try {
        await Map.find()
        .sort( { createdAt: -1 })
        .limit(1).then((data) => {
            console.log(data);
            res.send(data);
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({ success: false });
    }
});

export default router;
