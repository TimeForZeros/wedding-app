const Guest = require('../models/user');

const get = async (req, res) => {
  const guests = await Guest.find();
  res.status(200).json(guests);
};

const create = async (req, res) => {
  const guest = await Guest.create(req.body);
  res.status(201).json(guest);
};

module.exports = {
  get,
  create,
};
