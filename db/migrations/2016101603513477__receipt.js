'use strict';

const Nodal = require('nodal');

class Receipt extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101603513477;
  }

  up() {

    return [
      this.addColumn("receipts", "status", "int")
    ];

  }

  down() {

    return [];

  }

}

module.exports = Receipt;
