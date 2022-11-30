const express = require('express');
const errorMiddleware = require('../middlewares/error.middleware');
const loginRouter = require('../routes/login.routes');
const registerRouter = require('../routes/register.routes')

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRouter);
app.use(registerRouter);
app.use(errorMiddleware);

module.exports = app;
