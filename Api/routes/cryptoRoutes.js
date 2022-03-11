'use strict';
module.exports = (app) => {
  const cryptoList = require('../controllers/cryptoController');
  // cryptoList Routes
  app.route('/crypto')
    .get(cryptoList.list_all_cryptos)
    .post(cryptoList.create_a_crypto);
  app.route('/crypto/:cryptoId')
    .get(cryptoList.read_crypto)
    .put(cryptoList.update_a_crypto)
    .delete(cryptoList.delete_a_crypto);
};