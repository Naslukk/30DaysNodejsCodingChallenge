const express = require('express');
const app = express();

function greetHandler(req, res) {
    const name = req.query.name;
    const greeting = name ? `Helo, ${name}` :`Hello , Guest`;
    res.send(greeting);
}

app.get('/greet', greetHandler);

const port = 3000;

app.listen(port, ()=>{
    console.log("Server listening on port " + port);
});