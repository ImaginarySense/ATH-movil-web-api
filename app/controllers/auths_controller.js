'use strict';

const Nodal = require('nodal');
const Auth = Nodal.require('app/models/auth.js');

class AuthsController extends Nodal.Controller {

  index() {

    Auth.query()
      .where({bundle: this.params.query.bundle})
      .end((err, models) => {
        this.respond(err || models);

      });

  }

  show() {

    Auth.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {
    Auth.query()
      .where({bundle: this.params.body.bundle})
      .end((err, models) => {

        if(models._meta.total == 0){
          this.params.body.auth_key = Auth.generateAccessTokenString();
          Auth.create(this.params.body, (err, model) => {

            this.respond(err || model);

          });
        }else{
          this.respond(err || models);
        }

      });

  }

  update() {

    Auth.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Auth.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = AuthsController;
