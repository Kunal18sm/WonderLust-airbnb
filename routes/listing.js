const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");

const {storage} = require("../cloudConfig.js");
const multer  = require('multer');
const upload = multer({ storage });


router
    .route("/")
    // all listed place INDEX ROUTE
    .get(wrapAsync( listingController.index ))
    // create new
    .post(
        isLoggedIn,
        validateListing, 
        upload.single('listing[image]'), 
        wrapAsync(listingController.createListing)
    );

// to show form for adding new list
router.get("/new", isLoggedIn, listingController.formForNewListing);

router
    .route("/:id")
    // SHOW ROUTE
    .get( wrapAsync( listingController.showListing))
    // update route
    .put(
    isLoggedIn, 
    isOwner,
    upload.single('listing[image]'),
    validateListing ,
    wrapAsync( listingController.updateListing ))
    // destroy route
    .delete( 
    isLoggedIn, isOwner, 
    wrapAsync( listingController.deleteListing ));



// edit route
router.get("/:id/edit",
    isLoggedIn , isOwner ,
    wrapAsync( listingController.renderEditForm));



module.exports = router;