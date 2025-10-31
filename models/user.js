const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
    //passportloaclmongoose automaticaly generates a username and a salted password either we add it as field or not 
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("user",userSchema);