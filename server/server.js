

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let users = {
    name: 'evgeny',
    age: 22,
    lname: 'volkov'
}

app.get('/signin', (req, res) => {
    res.send(users);
})

app.post('/register', (req, res) => {
    console.log(req.body);
    res.json(req.body)
})

app.listen(3000);
