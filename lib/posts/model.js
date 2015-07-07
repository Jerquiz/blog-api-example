import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  category_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie'},
  title: { type: String, required: true, trim:true },
  slug: { type: String, unique: true },
  body: { type: String },
  created_at: { type: Date },
  updated_at: { type: Date }
})

postSchema.pre('save', function(next) {
  var currentDate = Date.now
  this.updated_at = currentDate

  if (!this.created_at) {
    this.created_at = currentDate
  }

  next()
})


export default mongoose.model('Post', postSchema)
