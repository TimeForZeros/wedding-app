const mongoose = require('mongoose');

const guestListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  guests: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
  ],
  notes: { type: String },
});

module.exports = mongoose.model('GuestList', guestListSchema);
