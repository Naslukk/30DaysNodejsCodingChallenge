const express = require('express');
const app = express();

// Express route to handle requests with a positive integer parameter
function positiveIntegerHandler(req, res, next) {
    const number = parseInt(req.query.number);

    if (Number.isInteger(number) && number > 0) {
        res.status(200).send("Success: Positive integer received.");
    } else {
        const error = new Error("Invalid number parameter. Please provide a positive integer.");
        error.status = 400;
        next(error);
    }
}

// Error handling middleware to catch specific errors
function errorHandler(err, req, res, next) {
    if (err.status === 400) {
        res.status(400).send(err.message);
    } else {
        // For other errors, pass to the default Express error handler
        next(err);
    }
}

app.use(errorHandler);

app.get('/positive', positiveIntegerHandler);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
