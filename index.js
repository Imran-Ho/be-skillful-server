const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT || 5000;

app.use(cors())

const courses = require('./Data/courses.json')
// console.log(courses)

app.get('/', (req, res) => {
  res.send('Be-Skillful server running')
})

app.get('/courses', (req, res) =>{
  res.send(courses)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})