const {Schema, Types, model} = require('mongoose');

const artistSchema = new Schema({
   title:{
    type: String,
    required: true
   },
   creator:{
    type:Schema.Types.ObjectId,
    ref: "User"
   },
   createdAt:{
    type:Date,
    default:Date.now(),
   }
});

const Artist =model('Artist', artistSchema)

exports.Artist = Artist