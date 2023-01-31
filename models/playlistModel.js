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
  
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
},
{
  toJSON: {virtuals:true}
}
);
playlistSchema.virtual("posts",{
  ref:"Song",
  localField:"_id",
  foreignField:"author_id"

})

const Playlist = model("Playlist", playlistSchema);

module.exports = { Playlist };
