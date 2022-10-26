const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Server site is runnig')
});

app.get("/categories", (req, res) => {
    res.send(categories);
});

app.get('/courses', (req, res) => {
    res.send(courses);
}) 

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log('Port is running on', port);
})