const {Schema, Types, model, default: mongoose} = require('mongoose');

const songSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    playlistId:Types.ObjectId,
    artist: {
        type:String,
        ref:"Artist"
    }, 
    createdAt:{
        type:Date, 
        default:Date.now()
    },
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Playlist"
    }
    
});

const Song =model('Song', songSchema)

exports.Song = Song