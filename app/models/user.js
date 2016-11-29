var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  initialize: function() {
    console.log('initilizing');
    this.on('creating', function(model, attrs, options) {
      console.log('about to call bcrypt');
      bcrypt.genSalt(10, function(saltErr, salt) {
        if (saltErr) { return; }
        console.log('MODEL PW', model.get('password'));
        bcrypt.hash(model.get('password'), salt, null, function(hashErr, hash) {
          if (hashErr) { return; }
          console.log('HASH', hash);
          // model.set('username', model.get('username'));
          // model.unset('password');
          model.save('password', hash).then(function(model) {
            console.log(model);
          });
          // console.log(model.get('password'));
        });
      });
    });  
  }
});

module.exports = User;