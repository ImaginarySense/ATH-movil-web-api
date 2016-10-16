'use strict';

const Nodal = require('nodal');

class Receipt extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101603480494;
  }

  up() {

    return [];

  }

  down() {

    return [];

  }

}

module.exports = Receipt;
