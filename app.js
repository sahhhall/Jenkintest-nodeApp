const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    console.log("hi am sahal")
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



module.exports = app;