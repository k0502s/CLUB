import express from 'express';
import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';
import config from '../../config/index.js';
import auth from '../../middleware/auth.js';
const { JWT_SECRET } = config;


import User from '../../models/user.js';

const router = express.Router();



router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        if (!users) throw Error('No users');
        res.status(200).json(users);
    } catch (e) {
        console.log(e);
        res.status(400).json({ msg: e.message });
    }
});



router.post('/', (req, res) => {
    console.log(req.body);
    const { name, email, password, camera, sex} = req.body;

    
    if (!name || !email || !password || !camera || sex === 0 ) {
        return res.status(400).json({ fail_msg: '모든 정보를 입력해주세요' });
    }
   
    User.findOne({ email }).then((user) => {
        if (user) return res.status(400).json({ fail_msg: '이미 가입된 유저가 존재합니다' });
        const newUser = new User({
            name,
            email,
            password,
            camera,
            sex
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save().then((user) => {
                    jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                camera: user.camera,
                                sex: user.sex
                            },
                        });
                    });
                });
            });
        });
    });
});



router.post('/:userName/profile', auth, async (req, res) => {
    try {
        const { previousPassword, password, rePassword, userId, email, name, camera } = req.body;
        console.log(req.body, 'userName Profile');
        const result = await User.findById(userId, 'password');
        // Check for existing user
        //  const user = User.findOne({ email })
        //     if (user)
        //       return res.status(400).json({ msg: "이미 가입된 유저가 존재합니다" });

        //   if(!user) {
        //     await User.findByIdAndUpdate(
        //       userId,
        //       {
        //         name,
        //         email,
        //       },
        //       { new: true } //몽고DB 업데이트 조건
        //     );
        //   }

        bcrypt.compare(previousPassword, result.password).then((isMatch) => {
            if (!isMatch) {
                return res.status(400).json({
                    match_msg: '기존 비밀번호와 일치하지 않습니다',
                });
            } else {
                if (password === rePassword) {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) throw err;
                            result.password = hash;
                            result.name = name;
                            result.email = email;
                            result.camera = camera;
                            result.save();
                        });
                    });
                    res.status(200).json({ success: '비밀번호 업데이트에 성공했습니다' });
                } else {
                    res.status(400).json({ fail_msg: '새로운 비밀번호가 일치하지 않습니다' });
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
});

export default router;
