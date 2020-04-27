const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  date: {
      type: Date,
      default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
