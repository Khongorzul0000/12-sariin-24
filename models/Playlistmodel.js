const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  // },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

const Playlist = model("Playlist", playlistSchema);

module.exports = { Playlist };
