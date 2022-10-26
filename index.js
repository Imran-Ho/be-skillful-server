const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT || 5000;

app.use(cors())

const courses = require('./Data/courses.json')
const subjects = require('./Data/subjects.json')
// console.log(courses)

app.get('/', (req, res) => {
  res.send('Be-Skillful server running')
})

app.get('/courses', (req, res) =>{
  res.send(courses)
})

app.get('/subjects', (req, res) =>{
  res.send(subjects)
})
app.get('/subjects/:id', (req, res) =>{
  // console.log(req.params.id)
  const id = req.params.id;
  const selectedSubject = subjects.find(subject => subject.subject_id === id)
  res.send(selectedSubject)
  // res.send(subjects)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})