const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// connecting DATA BASE
const mongoURL = "mongodb://127.0.0.1:27017/airbnb_DB";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main(){
    await mongoose.connect(mongoURL);
}

const initDB = async() =>{
    await Listing.deleteMany({}) ;
    initData.data = initData.data.map((obj) => ({...obj, owner:"68fc7391ce2fd2e3c56f863e"}))
    await Listing.insertMany(initData.data);
    console.log("connected and saved data");
}

initDB();