const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    console.log("hi")
    console.log("hi from dev branchsd ")
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



module.exports = app;