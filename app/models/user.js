var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  // initialize: function() {

  //   var getHash = function(password) {
  //     return new Promise(function(resolve, reject) {
  //       bcrypt.genSalt(10, function(error, salt) {
  //         if (error) { return reject(error); }

  //         bcrypt.hash(password, salt, null, function(error, hash) {
  //           if (error) { return reject(error); }
  //           return resolve(hash);
  //         });
  //       });
  //     });
  //   };

  //   this.on('creating', function(model, attrs, options) {
  //     getHash(model.get('password')).then(function(hash) {
  //       console.log('HASH', hash);
  //       model.set('password', hash);
  //     });
  //   });

  // }
});

module.exports = User;