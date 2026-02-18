const express = require('express')
const router = express.Router()
const Research = require('../models/Research')

router.get('/', async (req, res) => {
  try {
    const items = await Research.find().sort({ createdAt: -1 })
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:slug', async (req, res) => {
  try {
    const item = await Research.findOne({ slug: req.params.slug })
    if (!item) return res.status(404).json({ error: 'Not found' })
    res.json(item)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const item = new Research(req.body)
    await item.save()
    res.status(201).json(item)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
