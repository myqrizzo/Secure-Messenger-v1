const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const secret = process.env.MONGODB_KEY;

const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  toemail: {
    type: String,
    required: true
  },
  fromemail: {
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

ItemSchema.plugin(encrypt, { secret: secret, excludeFromEncryption: ['toemail'] });

module.exports = Item = mongoose.model('item', ItemSchema);
