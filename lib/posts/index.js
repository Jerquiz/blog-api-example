import express from 'express'
import PostController from './controller'

const router = express.Router()

router.route('/posts')
  .get(PostController.getAll)
  .post(PostController.newPost)

router.route('/posts/:post_id')
  .get(PostController.getById)
  .put(PostController.update)
  .delete(PostController.delete)

router.route('/posts/categories/:cat_id')
  .get(PostController.getByCategorie)

export default router



