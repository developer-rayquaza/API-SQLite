import express, { Express } from 'express';
import morgan from 'morgan';
const app: Express = express();

/** Logging */
app.use(morgan('dev'));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());

/** RULES OF OUR API */
app.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
app.use(require('./routes'));

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('not found2');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */

const PORT: any = process.env.PORT ?? 6000;
app.listen(5000, () => console.log(`The server is running on port ${PORT}`));