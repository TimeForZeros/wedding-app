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

const create = async (req, res) => {
  try {
    const test = await Guest.create(req.body);
    res.status(201);
    return res.json(test);
  } catch (err) {
    console.log(err);
    return res.status(500);
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
    return res.send('DELETED ALL');
  } catch (err) {
    return res.status(400);
  }
};

module.exports = {
  get,
  create,
  deleteAll,
  deleteOne,
};
