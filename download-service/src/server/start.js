const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const setupRoutes = require('./routes');
// uncomment when install @types
// const express, { NextFunction, Request, Response } = require('express');

const port = 3002;

const startServer = () => {

    const app = express();

    app.use(bodyParser.json());

    app.use(
        cors({
            origin: (origin, cb) => cb(null, true),
            credentials: false, // change to true to protect the routes
        })
    );

    setupRoutes(app);

    // uncomment when install @types
    // app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    app.use((err, req, res, next) => {
        return res.status(500).json({ message: err.message });
    });
    
    app.listen(port, '0.0.0.0', () => {
        console.log(`Download service listening on ${port}`);
    });
};

module.exports = startServer;