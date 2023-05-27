import express from 'express';
import configViewEngine from './configs/viewEngine';
import initAPIRoute from './route/api';

import iniWebRoute from './route/web';
import path from 'path';
import cors from 'cors';
// import connection from './configs/connectDB';
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true }));


configViewEngine(app);
iniWebRoute(app);
initAPIRoute(app);


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/index.html'));
// })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})