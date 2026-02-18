const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true },
  github:   { type: String },
  phone:    { type: String },
  location: { type: String },
  cgpa:     { type: String },
  bio:      { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Profile', profileSchema)
