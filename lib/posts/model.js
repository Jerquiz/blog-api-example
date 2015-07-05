import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  category_id: {type: Schema.Types.ObjectId, ref: 'Category'},
  title: { type: String, required: true, trim:true },
  slug: { type: String, unique: true },
  body: { type: String },
  created_at: { type: Date, required:true },
  updated_at: { type: Date, required:true }
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
