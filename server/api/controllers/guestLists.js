const GuestList = require('../models/guestList');

const get = async (req, res) => {
  const guestList = await GuestList.find();
  res.status(200).json(guestList);
};

const create = async (req, res) => {
  const guestList = await GuestList.create(req.body);
  res.status(201).json(guestList);
};

const updateOne = async (req, res) => {
  const guestListId = req.params.id;
  await GuestList.updateOne(guestListId, req.body);
  res.status(200);
};
const deleteOne = async (req, res) => {
  const guestListId = req.params.id;
  await GuestList.deleteOne(guestListId);
  res.status(200);
};
const deleteAll = async (req, res) => {
  await GuestList.deleteMany({});
  res.status(200);
};

module.exports = {
  get,
  create,
  updateOne,
  deleteOne,
  deleteAll,
};
