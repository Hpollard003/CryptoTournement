'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CryptoSchema = new Schema({
  name: {
    type: String,
    required: 'Enter Crypto name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});
module.exports = mongoose.model('Crypto', CryptoSchema);