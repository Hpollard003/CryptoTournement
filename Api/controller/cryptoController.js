'use strict';
const mongoose = require('mongoose'),
  Crypto = mongoose.model('Crypto');
exports.list_all_cryptos = (req, res) => {
  Crypto.find({}, (err, crypto) => {
    if (err)
      res.send(err);
    res.json(crypto);
  });
};
exports.create_a_crypto = (req, res) => {
  let new_crypto = new Crypto(req.body);
  new_crypto.save((err, crypto) => {
    if (err)
      res.send(err);
    res.json(crypto);
  });
};
exports.read_crypto = (req, res) => {
  Crypto.findById(req.params.cryptoId, (err, crypto) => {
    if (err)
      res.send(err);
    res.json(crypto);
  });
};
exports.update_a_crypto = (req, res) => {
 Crypto.findOneAndUpdate({_id: req.params.cryptoId}, req.body, {new: true}, (err, task) => {
    if (err)
      res.send(err);
    res.json(crypto);
  });
};
exports.delete_a_crypto = (req, res) => {
  Crypto.remove({
    _id: req.params.cryptoId
  }, (err, crypto) => {
    if (err)
      res.send(err);
    res.json({ message: 'Crypto successfully deleted' });
  });
};