const express = require('express');
const errorMiddleware = require('../middlewares/error.middleware');
const loginRouter = require('../routes/login.routes');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRouter);
app.use(errorMiddleware);

module.exports = app;
