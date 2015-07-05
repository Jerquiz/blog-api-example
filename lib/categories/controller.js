import Categorie from './model'

class CategorieController {
  getAll(req, res) {
    Categorie
      .find({})
      .then((categories) => res.json(categories))
      .catch((err) => res.send(err))
  }

  getById(req, res) {
    let categorieId = req.params.cat_id
    Categorie
      .findById(categorieId)
      .then((categorie) => res.json(categorie))
      .catch((err) => res.send(err))
  }

  create(req, res) {
    var newCategorie = new Categorie()
    newCategorie.name = req.body.name
    newCategorie.save()
      .then((categorie) => res.json({ data: categorie }))
  }

  update(req, res) {
    let categorieId = req.params.cat_id
    let categorieBody = req.body
    Categorie
      .findOneAndUpdate(categorieId, categorieBody)
      .then((categorie) => res.json(categorie))
      .catch((err) => res.send(err))
  }

  delete(req, res) {
    let categorieId = req.params.cat_id
    Categorie
      .findByIdAndRemove(categorieId)
      .then(() => res.json({ message: `Categorie ${categorieId} deleted succesfully`}))
      .catch((err) => res.send(err))
  }
}

export default CategorieController
