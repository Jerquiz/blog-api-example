import Post from './model'

class PostController {
  getAll(req, res) {
    Post
      .find({})
      .then((posts) => res.json(posts))
      .catch((err) => res.send(err))
  }

  getById(req, res) {
    Post
      .findById(req.params.post_id)
      .then((post) => res.json(post))
      .catch((err) => res.send(err))
  }

  getByCategorie(req, res) {
    Post
      .find({category_id: req.params.cat_id})
      .then((posts) => res.json(posts))
  }

  newPost(req, res) {
    Post
      .create(req.body)
      .then((post) => res.json(post))
  }

  update(req, res) {
    Post
      .findOneAndUpdate(req.params.post_id, req.body)
      .then((post) => res.json(post))
      .catch((err) => res.send(err))
  }

  delete(req, res) {
    Post
      .findByIdAndRemove(req.params.post_id)
      .then(() => res.json({ message: `Post ${req.params.post_id} deleted succesfully`}))
      .catch((err) => res.send(err))
  }
}

export default new PostController()
