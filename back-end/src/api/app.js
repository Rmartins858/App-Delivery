const express = require('express');
const errorMiddleware = require('../middlewares/error.middleware');
const cors = require('cors');
const loginRouter = require('../routes/login.routes');
const registerRouter = require('../routes/register.routes')
const productRouter = require('../routes/customer.routes');

const app = express();

app.use(express.json());
app.use(cors())

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRouter);
app.use(registerRouter);
app.use(productRouter);
app.use(errorMiddleware);

module.exports = app;
