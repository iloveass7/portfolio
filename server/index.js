require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()
const path = require('path')

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

// Routes
app.use('/api/projects',  require('./routes/projects'))
app.use('/api/research',  require('./routes/research'))
app.use('/api/profile',   require('./routes/profile'))

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body
  console.log(`Contact form submission from ${name} <${email}>: ${message}`)
  // In production: use nodemailer or a mail service here
  res.json({ ok: true, message: 'Message received' })
})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'))
  })
} else {
  // Health check
  app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
