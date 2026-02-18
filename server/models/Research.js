const mongoose = require('mongoose')

const researchSchema = new mongoose.Schema({
  slug:          { type: String, required: true, unique: true },
  label:         { type: String, required: true },
  title:         { type: String, required: true },
  summary:       { type: String, required: true },
  problem:       { type: String },
  motivation:    { type: String },
  algorithms:    { type: String },
  contributions: { type: String },
  tech:          [{ type: String }],
  github:        { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Research', researchSchema)
