const { Schema, Types, model } = require('mongoose');

const playlistSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        isPrivate: {
            type: Boolean,
            default: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        toJSON: { virtuals: true },
    },
);
playlistSchema.virtual('songs', {
    ref: 'Song',
    localField: '_id',
    foreignField: 'author_id',
});

const Playlist = model('Playlist', playlistSchema);

module.exports = { Playlist };
