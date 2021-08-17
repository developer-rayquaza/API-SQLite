import express from 'express';
import Controller from '../controllers/PostController';
const router = express.Router();

router.get('/', Controller.getPosts);

export = router;