const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  slug:          { type: String, required: true, unique: true },
  title:         { type: String, required: true },
  category:      { type: String, enum: ['ai', 'web', 'systems', 'research'], required: true },
  categoryLabel: { type: String, required: true },
  desc:          { type: String, required: true },
  tech:          [{ type: String }],
  github:        { type: String },
  status:        {
    type: String,
    enum: ['Completed', 'Ongoing', 'Research', 'Ongoing Thesis'],
    default: 'Completed',
  },
  featured:      { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema)
