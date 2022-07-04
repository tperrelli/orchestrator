import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import setupRoutes from './routes';
import accessEnv from '#root/utils/accessEnv';

const port = parseInt(accessEnv("PORT", "3001"), 10);

const startServer = () => {

    const app = express();

    app.use(bodyParser.json());

    app.use(
        cors({
            origin: (origin, cb) => cb(null, true),
            credentials: false // change to true to protect the routes
        })
    );

    setupRoutes(app);
    
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        return res.status(500).json({ message: err.message });
    });

    app.listen(port, '0.0.0.0', () => {
        console.log(`User service listening on ${port}`);
    });
};

export default startServer;