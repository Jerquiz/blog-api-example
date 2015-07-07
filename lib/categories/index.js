import express from 'express'
import CategorieController from './controller'

const router = express.Router()
const categorieCtrl = new CategorieController()

router.route('/categories')
  .get(categorieCtrl.getAll)
  .post(categorieCtrl.create)

router.route('/categories/:cat_id')
  .get(categorieCtrl.getById)
  .put(categorieCtrl.update)
  .delete(categorieCtrl.delete)


export default router
