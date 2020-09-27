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
  const { guestList } = req.params;
  await GuestList.updateOne(guestList, req.body);
  res.status(200);
};
const updateAll = async (req, res) => {
  await GuestList.updateMany({}, req.body).then(res.status(200));
};
const deleteOne = async (req, res) => {
  const guestList = req.params.id;
  try {
    await GuestList.deleteOne({ _id: guestList });
    res.send('DELETED ONE SUCCESSFULLY');
  } catch (err) {
    console.error(res.status(400));
  }
};
const deleteAll = async (req, res) => {
  await GuestList.deleteMany({})
    .then(res.send('DELETED ALL LISTS'))
    .catch(res.status(400));
};

module.exports = {
  get,
  create,
  updateOne,
  updateAll,
  deleteOne,
  deleteAll,
};
