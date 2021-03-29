import express from 'express';

//Model
import Post from '../../models/post.js';
// import Category from '../../models/category.js';
import Comment from '../../models/comment.js';
import User from '../../models/user.js';

import auth from '../../middleware/auth.js';
import moment from 'moment';
import '@babel/polyfill';

const router = express.Router();

import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
});

const uploadS3 = multer({
    storage: multerS3({
        s3,
        bucket: 'jinseokproject1/upload',
        region: 'ap-northeast-2',
        key(req, file, cb) {
            const ext = path.extname(file.originalname); // 파일 확장자
            const basename = path.basename(file.originalname, ext); //
            cb(null, basename + new Date().valueOf() + ext); // 파일 중복이 없도록 설정하는 것들
        },
    }),
    limits: { fileSize: 100 * 1024 * 1024 }, //파일 용량 사이즈 설정
});

// @route     POST api/post/image
// @desc      Create a Post
// @access    Private

router.post('/image', uploadS3.array('upload', 5), async (req, res, next) => {
    try {
        console.log(req.files.map((v) => v.location));
        res.json({ uploaded: true, url: req.files.map((v) => v.location) });
    } catch (e) {
        console.error(e);
        res.json({ uploaded: false, url: null });
    }
});

//  @route    GET api/post
//  @desc     More Loading Posts
//  @access   public
// router.get('/skip/:skip', async (req, res) => {
//     try {
//         const postCount = await Post.countDocuments();
//         const postFindResult = await Post.find().skip(Number(req.params.skip)).limit(6).sort({ date: -1 });
//         // const categoryFindResult = await Category.find();

//         const result = { postFindResult, categoryFindResult, postCount };

//         res.json(result);
//     } catch (e) {
//         console.log(e);
//         res.json({ msg: '더 이상 포스트가 없습니다' });
//     }
// });

const getPagination = (page, size) => {
    const limit = size ? +size : 8;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

router.get('/posts', async (req, res) => {
    try {
        const { page, size, title, category } = req.query;

        var condition = title ? { title: { $regex: new RegExp(title), $options: 'i' }, category: `${category}` } : { category: `${category}` };

        const { limit, offset } = getPagination(page, size);

        await Post.paginate(condition, { offset, limit }).then((data) => {
            console.log(data);
            res.send({
                totalItems: data.totalDocs,
                postdata: data.docs.reverse(),
                totalPages: data.totalPages,
                currentPage: data.page - 1,
            });
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send(err);
    }
});

// @route   POST api/post
// @desc    Create a Post
// @access  Private

//Post 새로 생성하기
router.post('/', auth, uploadS3.none(), async (req, res, next) => {
    try {
        console.log(req.user, 'req.user');
        const { title, contents, fileUrl, category, userName } = req.body;
        const newPost = await Post.create({
            title,
            contents,
            fileUrl,
            writer: req.user.id,
            writerName: userName,
            category,
            date: moment().format('YYYY-MM-DD hh:mm'),
        });
        await User.findByIdAndUpdate(req.user.id, {
            $push: {
                posts: newPost._id,
            },
        });

        return res.redirect(`/api/post/${newPost._id}`);
    } catch (e) {
        console.log(e);
    }
});

// @route    POST api/post/:id
// @desc     Detail Post
// @acecess  Public

router.get('/:id', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate({ path: 'writer', select: 'name' });
        post.views += 1;
        post.save();
        console.log(post);
        res.json(post);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

// [Comments Route]

// @route Get api/post/:id/comments
// @desc  Get All Comments
// @access public

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
    }
});

router.post('/:id/comments', async (req, res, next) => {
    console.log(req, 'comments');
    const newComment = await Comment.create({
        contents: req.body.contents,
        writer: req.body.userId,
        writerName: req.body.userName,
        post: req.body.id,
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
        next(e);
    }
});

router.post('/comment/edit', async (req, res, next) => {
    try {
        const editcomment = await Comment.findByIdAndUpdate(req.body.commentId, {
            contents: req.body.contents,
        });
        res.json(editcomment);
    } catch (e) {
        console.log(e);
        next(e);
    }
});

// @route    Delete api/post/:id
// @desc     Delete a Post
// @access   Private

router.delete('/:id', auth, async (req, res) => {
    await Post.deleteMany({ _id: req.params.id });
    await Comment.deleteMany({ post: req.params.id });
    await User.findByIdAndUpdate(req.user.id, {
        $pull: {
            posts: req.params.id,
            comments: { post_id: req.params.id },
        },
    });

    return res.json({ success: true });
});

// @route    GET api/post/:id/edit
// @desc     Edit Post
// @access   Private
router.get('/:id/edit', auth, async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate('writer', 'name');
        res.json(post);
    } catch (e) {
        console.error(e);
    }
});

router.post("/:id/edit", auth, async (req, res, next) => {
    console.log(req, "api/post/:id/edit");
    const {
      body: { title, contents, fileUrl, id },
    } = req;
  
    try {
      const modified_post = await Post.findByIdAndUpdate(
        id,
        {
          title,
          contents,
          fileUrl,
          date: moment().format("YYYY-MM-DD hh:mm"),
        },
        { new: true } //몽고DB 업데이트 조건
      );
      res.json({id: id});
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default router;
