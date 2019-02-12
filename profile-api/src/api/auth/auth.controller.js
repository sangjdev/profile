const SHA256 = require('crypto-js/sha256');
/**
 * 회원가입
 */
exports.register = ctx => {
  const { name, email, password } = ctx.request.body;
  console.log(name, email, password);
  console.log(SHA256('Message'));
  //   console.log(`Request Body: ${JSON.stringify(ctx.request.body)}`);
  ctx.body = 'register api get test';
};
