const Genre = require('../models/Genre');

exports.getAllGenres = async (req, res, next) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (err) {
    next(err);
  }
};

exports.createGenre = async (req, res, next) => {
  try {
    const newGenre = new Genre(req.body);
    const savedGenre = await newGenre.save();
    res.status(201).json(savedGenre);
  } catch (err) {
    next(err);
  }
};