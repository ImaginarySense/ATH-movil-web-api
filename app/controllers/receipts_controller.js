'use strict';

const Nodal = require('nodal');
const Receipt = Nodal.require('app/models/receipt.js');
const Auth = Nodal.require('app/models/auth.js');

class ReceiptsController extends Nodal.Controller {

  index() {
    Auth.query()
      .where({bundle: this.params.query.bundle,auth_key:this.params.query.auth_key})
      .end((err, models) => {

        if(models._meta.total == 1){
          Receipt.query()
            .where({transaction: this.params.query.transaction})
            .end((err, models) => {

              this.respond(err || models);

            });
        }else{
          this.respond(err || models);
        }


      });


  }

  show() {

    Receipt.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {
    Auth.query()
      .where({bundle: this.params.body.bundle,auth_key:this.params.body.auth_key})
      .end((err, models) => {

        if(models._meta.total == 1){
          Receipt.query()
            .where({transaction: this.params.body.transaction})
            .end((err, models) => {

              if (this.params.body.status && this.params.body.status == 2) {
                if(models._meta.total == 1){

                  var s = {};
                  s.id = models[0]._data.id;
                  s.status = 2;
                  s.data = this.params.body.data;

                  Receipt.update(models[0]._data.id, s, (err, model) => {

                    this.respond(err || model);

                  });
                }else{
                  this.respond([]);
                }
              }else{
                if(models._meta.total == 0){
                  this.params.body.status = 1;
                  Receipt.create(this.params.body, (err, model) => {

                    this.respond(err || model);

                  });
                }else{
                  this.respond([]);
                }
              }
          });
        }else{
          this.respond(err || models);
        }


      });


  }

  update() {
    Auth.query()
      .where({bundle: this.params.body.bundle,auth_key:this.params.body.auth_key})
      .end((err, models) => {

        if(models._meta.total == 1){
          Receipt.query()
            .where({transaction: this.params.body.transaction})
            .end((err, models) => {

              if(models._meta.total == 1){
                Receipt.update(this.params.route.id, this.params.body, (err, model) => {

                  this.respond(err || model);

                });
              }else{
                this.respond([]);
              }


          });
        }else{
          this.respond(err || models);
        }
      });

  }

  destroy() {

    Receipt.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = ReceiptsController;
