require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/twitter', (req, res) => {
    res.send('Gyana prakash khandual');
});

app.get('/login', (req, res) => {
    res.send('<h1>Please Login with valid credentials</h1>')
})

app.listen(PORT, () => {
    console.log(`Server running in the http://localhost:${PORT}`);
});