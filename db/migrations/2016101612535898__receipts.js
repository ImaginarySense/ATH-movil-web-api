'use strict';

const Nodal = require('nodal');

class Receipts extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101612535898;
  }

  up() {

    return [
      this.addColumn("receipts", "data", "string")
    ];

  }

  down() {

    return [];

  }

}

module.exports = Receipts;
