'use strict';

const Nodal = require('nodal');

class CreateReceipts extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101603364076;
  }

  up() {

    return [
      this.createTable("receipts", [{"name":"transaction","type":"string"},{"name":"bundle","type":"string"},{"name":"status","type":"int"}])
    ];

  }

  down() {

    return [
      this.dropTable("receipts")
    ];

  }

}

module.exports = CreateReceipts;
