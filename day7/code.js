const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/greet', (req, res) => {
    let name = req.query.params;

    if (name){
        res.send(`Hello, ${name}`);
        console.log(`Hello, ${name}`);
    }else{
        res.send('Hello ,Guest!');
    }
})

    app.listen(3030,()=>{
        console.log('listening on port 3030');
    })