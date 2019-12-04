import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// auth
// logging
import debug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
// env
import * as dotEnv from 'dotenv';
import TesseractRoutes from "./routes/TesseractRoutes";
// models


dotEnv.config();

const {PORT, MONGODB_URI} = process.env;
const port = PORT || 5000;
const mongodb_uri = MONGODB_URI ;
console.log('mongodb_uri',mongodb_uri);
//const mongodb_uri =   'mongodb://localhost:27017/ocr';

const app = express();
const debugApp = debug('app');
// app.options("/*", function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.sendStatus(200);
// });

/**
 * connecting to mongodb
 * run mongodb (OS X terminal): mongod
 */
mongoose.connect(
    mongodb_uri,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
)
    .then(() => debugApp('Connected Successfully to mongodb'))
    .catch(() => debugApp("Can't connect to mongodb"));


/**
 * middlewares
 */
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        // extended: true, // false
        extended: false,
    })
);

/**
 * passport middleware
 */

/**
 * routes
 */
app.use('/api/tessarect', TesseractRoutes());


/**
 * Error handling
 */
app.use((err, req, res, next) => {
    // treat as 404
    if (err.message && (~err.message.indexOf('not found') || (~err.message.indexOf('Cast to ObjectId failed')))) {
        return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).send(
        err.message,
    );
});

/**
 * assume 404 since no middleware responded
 */
app.use((req, res, next) => {
    res.status(404).send(
        'not found'
    );
});

/**
 * Listening to requests
 */
app.listen(port, () => debugApp(`app listening on port ${port}!`));

