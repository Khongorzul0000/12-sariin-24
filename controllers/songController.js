const { Song } = require("../models");

const createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};

const getSongs = async (req, res) => {
  const result = await Song.find({});
  res.send(result);
};

const getSong = async (req, res) => {
  const result = await Song.findById(req.params.id).populate("author_id");
  res.send(result);
};
const deleteSong = async (req, res) => {
  const id = req.params.id
  const result = await Song.findByIdAndDelete({_id:id});
  res.send(result);

};

module.exports = { createSong, getSongs, getSong, deleteSong};