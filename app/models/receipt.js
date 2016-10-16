'use strict';

const Nodal = require('nodal');

class Receipt extends Nodal.Model {}

Receipt.setDatabase(Nodal.require('db/main.js'));
Receipt.setSchema(Nodal.my.Schema.models.Receipt);

module.exports = Receipt;
