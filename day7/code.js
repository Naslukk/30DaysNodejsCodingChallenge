const express = require('express');
const app = express();

function requestLoggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    console.log(`${timestamp} - ${method} request received.`);
    next();
}


app.use(requestLoggerMiddleware);


app.get('/', requestLoggerMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});