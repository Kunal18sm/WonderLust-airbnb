const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        require: true,
    },

    description:{
        type: String,
        require: true,
    },

    image:{
        url: String,
        filename: String,
    },

    price:{
        type: Number,
        require: true,
        min: 0,
    },

    location:{
        type: String,
        require: true,
    },

    country:{
        type: String,
        lowercase: true,
        require: true,
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    
    tags:[String],


})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
