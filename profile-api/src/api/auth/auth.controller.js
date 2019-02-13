const crypto = require('crypto');
const models = require('../../models');

/**
 * 회원가입
 */
exports.register = async ctx => {
  const { name, email, password } = ctx.request.body;
  const { SECRET } = process.env;
  const hash = crypto
    .createHmac('sha256', SECRET)
    .update(password)
    .digest('hex');

  try {
    await models.user
      .build({
        name: name,
        email: email,
        password: hash
      })
      .save();
  } catch (e) {
    console.log('error', e);
  }
  ctx.body = 'register api get test';
};
