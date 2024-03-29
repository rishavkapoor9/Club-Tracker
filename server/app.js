//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const _ = require('lodash');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/clubTrackerDB',{useNewUrlParser: true, useUnifiedTopology: true});
const shortId = require("shortid");

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: "secret string.",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());


const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    admin: {
        type: Boolean,
        default: false
    }
},{timestamps: true})
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User",userSchema);
passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user);
});
   
  passport.deserializeUser(function(user, done) {
    done(null, user);
});


const postSchema = new mongoose.Schema({
    username: String,
    name: String,
    image: Object,
    video: String,
    description: String,
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        username: String,
        name: String,
        text: String,
        time: {
            type: Date,
            default: new Date()
        }
    }]
},{timestamps: true})
const Post = new mongoose.model("Post", postSchema);

app.post("/api/createPost",(req,res)=>{
    // const {username,name} = req.user;
    // Post.create({ ...req.body});
    res.send("ok")
})

// app.get('/api/get/:username', function(req,res){
//     Url.find({username: req.params.username}).then((urls)=>{res.send(urls)});
// })
// app.get('/api/geturl/:short', function(req,res){
//     Url.find({short: req.params.short}).then(function(urls){res.json({full: urls[0].full})});
// })
app.get('/login',function(req,res){
    if (req.isAuthenticated()) {
        res.json({ isAuthenticated: true, user: req.user });
      } else {
        res.json({ isAuthenticated: false });
      }
})
app.get('/logout',function(req,res){
    req.logout(function(){});
})
// app.post('/api/insert', function(req,res){
//     const url = req.body.url
//     const note = req.body.note
//     const username = req.body.user;
//     Url.insertMany([{username: username,full: url, note: note}]).then(()=>{});
// })
app.post('/signup',function(req,res){
    console.log("aya")
    User.register({username: req.body.username, admin: req.body.admin, name:req.body.name}, req.body.password, function(err,user){
        if(err){
            console.log(err);
            // res.redirect("/signup");
        }
        else{
            passport.authenticate("local")(req,res,function(){
                res.send({ message: 'Authentication successful' });
            });
        }
    })
})

app.post("/login", function(req, res){
    User.findOne({username: req.body.username}).then(function(foundUser, err){
        if(foundUser){
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        passport.authenticate("local", function(err, user){
            if(err){
                console.log(err);
            } else {
                if(user){
                    req.login(user, function(err){
                        res.send({ message: 'Authentication successful' });
                        // console.log(user)
                    });
                }
                else {
                    res.send({message: "wrong password"});
                }
            }
        })(req, res);
        } else {
            res.send({message: "no user"});

            // res.redirect("/login")
        }
    });
});

app.listen(4000, function(){
    console.log('server connected on port 4000');
})