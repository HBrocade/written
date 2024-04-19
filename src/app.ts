import express from 'express';
import dataRouter from './routes/data'
import flatten from './routes/flatten'
import logs from './routes/log'
// const dataRouter = require('../routes/data');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/data', dataRouter);
app.use('/flatten', flatten);
app.use('/logs', logs)
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
