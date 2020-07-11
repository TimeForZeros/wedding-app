const Guest = require('../models/user');

const get = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const guests = await Guest.find();
  res.status(200).json(guests);
};

const create = async (req, res) => {
  const guest = await Guest.create(req.body);
  res.status(201).json(guest);
};
const deleteOne = async (req, res) => {
  const guest = req.params.id;
  await Guest.deleteOne({ _id: guest })
    .then(res.send('DELETED ONE SUCCESSFULLY'))
    .catch(console.error(res.status(400)));
};

const deleteAll = async (req, res) => {
  await Guest.deleteMany({})
    .then(res.send('DELETED ALLL'))
    .catch(res.status(400));
};

module.exports = {
  get,
  create,
  deleteAll,
  deleteOne,
};
