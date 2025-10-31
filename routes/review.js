const express = require("express");
const router = express.Router({mergeParams:true});

const wrapAsync = require("../utils/wrapAsync.js");

// const Review = require("../models/review.js");
// const Listing = require("../models/listing.js");

const {isLoggedIn,validateReview,isAuthor} = require("../middleware.js");

const ReviewController = require("../controllers/reviews.js")



// reviews POST route
router.post("/" ,isLoggedIn, validateReview,
    wrapAsync (ReviewController.createReview));

// review Delete Route
router.delete("/:reviewId", isLoggedIn,isAuthor,
    wrapAsync(ReviewController.deleteReview));

module.exports = router;