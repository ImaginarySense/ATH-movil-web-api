'use strict';

const Nodal = require('nodal');

class CreateAuths extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101601130707;
  }

  up() {

    return [
      this.addForeignKey("auths","bundle","string"),
      this.addColumn("auths","auth_key","string")

      //this.createTable("auths", [{"name":"bundle","type":"string"},{"name":"auth_key","type":"string"}])
    ];

  }

  down() {

    return [
      //this.dropTable("auths")
      this.dropForeignKey("auths","bundle"),
      this.dropColumn("auths","auth_key")
    ];

  }

}

module.exports = CreateAuths;
