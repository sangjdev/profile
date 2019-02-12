const Router = require('koa-router');
const authCtrl = require('./auth.controller');

const auth = new Router();

auth.post('/register', authCtrl.register);

module.exports = auth;
