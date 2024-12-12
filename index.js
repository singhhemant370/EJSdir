const express = require("express");
const app = express();
const path = require("path");
const instaData = require("./data.json");
const port = 8080;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"/public/css/")));
app.use(express.static(path.join(__dirname,"/public/js/")));

app.get("/", (req, res)=>{
    res.render("home.ejs")
});

app.get("/randomdise", (req, res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("randomdise.ejs", {ranVal : diseVal});
    // res.render("randomdise.ejs", {diseVal : diseVal});
    
    // If our both values are same then we write only ones
    res.render("randomdise.ejs", {diceVal});
});

app.get("/ig/:username", (req, res)=>{
    let username = req.params;
    let followers = ["sachin","varun", "prince", "titu"];

    res.render("instagram.ejs", {username, followers});
    // console.log(req.params);
});

app.get("/insta/:user", (req, res)=>{
    let { user } = req.params;
    // console.log(user);
    let data = instaData[user];
    if(data){
        res.render("insta.ejs", {data});
    }else{
        res.render("error.ejs");
    }
});

app.listen(port, ()=>{
    console.log(`listining on port ${port}`);
});

