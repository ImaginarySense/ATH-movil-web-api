'use strict';

const Nodal = require('nodal');
const crypto = require('crypto');

class Auth extends Nodal.Model {
  static generateAccessTokenString() {

    return crypto
      .createHmac('md5', crypto.randomBytes(512).toString())
      .update([].slice.call(arguments).join(':'))
      .digest('hex');

  }
}

Auth.setDatabase(Nodal.require('db/main.js'));
Auth.setSchema(Nodal.my.Schema.models.Auth);



module.exports = Auth;
