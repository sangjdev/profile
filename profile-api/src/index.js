require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

const api = require('./api');
const port = process.env.PORT || 4000;

app.use(koaBody());
router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

// DevPort 4000
app.listen(port);
