const Guest = require('../models/user');

const get = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  try {
    const guests = await Guest.find();
    res.status(200).json(guests);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};
const getOne = async (req, res) => {
  const guest = await Guest.findById(req.params.id);
  console.log(guest);
  res.status(200).res.json(guest);
};

const create = async (req, res) => {
  try {
    const test = await Guest.create(req.body);
    return res.status(201).json(test);
  } catch (err) {
    console.log(err);
    res.status(500);
    return res.redirect('/home');
  }
};

const deleteOne = async (req, res) => {
  const guest = req.params.id;
  try {
    await Guest.deleteOne({ _id: guest });
    res.send('DELETED ONE SUCCESSFULLY');
  } catch (err) {
    console.error(res.status(400));
  }
};

const deleteAll = async (req, res) => {
  try {
    await Guest.deleteMany({});
    return res.status(200).send('DELETED ALL');
  } catch (err) {
    return res.status(400);
  }
};

module.exports = {
  get,
  getOne,
  create,
  deleteAll,
  deleteOne,
};
