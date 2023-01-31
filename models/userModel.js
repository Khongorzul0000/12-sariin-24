const {Schema, Types, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    createdAt:{
        type:Date, 
        default:Date.now()
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    playlist:{
        type:Object,
        required:true,
    },
    
});

const User =model('User', userSchema)

exports.User = User