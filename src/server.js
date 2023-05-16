import express from 'express';
import configViewEngine from './configs/viewEngine';

import iniWebRoute from './route/web';
import path from 'path';
// import connection from './configs/connectDB';
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


configViewEngine(app);
iniWebRoute(app);


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/index.html'));
// })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})