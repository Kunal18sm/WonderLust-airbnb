const User = require("../models/user");

module.exports.renderSignUpForm = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.renderLogInForm = (req,res)=>{
 res.render("users/login.ejs");
};

module.exports.signUp = async (req,res)=>{   
    try{
        let {username,email,password} = req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser,password);
        let redirectUrl = res.locals.redirectUrl || "/listings";
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to WanderLust!");
            res.redirect(redirectUrl);
        })
        
    } catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
};

module.exports.login = async (req,res) => {
    req.flash("success","Welcome to WanderLust! You are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logOut = (req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    });
};