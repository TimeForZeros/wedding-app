const mongoose = require('mongoose');

const { Schema } = mongoose;

const guestSchema = new Schema(
  {
    name: { type: String, max: 160, required: true },
    // name: { type: String, max: 160 },
    going: { type: Boolean, default: false },
    // dietaryRestriction: [String],
  },
  { autoIndex: false },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model('Guest', guestSchema);
