import mongoose from 'mongoose'

const categorieSchema = new mongoose.Schema({
  name: {type: String}
})

export default mongoose.model('Categorie', categorieSchema)
