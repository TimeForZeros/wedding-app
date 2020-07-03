const mongoose = require('mongoose');

const { Schema } = mongoose;

const guestSchema = new Schema(
  {
    name: { type: String, max: 160, required: true },
    email: {type: String, required: true},
    password: {type: String, required: true},
    going: { type: Boolean, default: false },
    dietaryRestriction: [String],
    musicRequest: {type: String},
  },
  { autoIndex: false },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Guest', guestSchema);
