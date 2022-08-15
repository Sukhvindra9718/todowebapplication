const path = require('path');
const express = require('express');
const app = express();
const port = 8000;
const hbs = require("hbs");
// builtin middleware
const staticPath = path.join(__dirname,"../public/css");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

// console.log(__dirname);
// Add css style sheet using middle ware
app.use('/public/css',express.static(staticPath));

// Add js file using middle ware
app.use('/src',express.static(__dirname));

// To set the view engine
app.set("view engine","hbs");

// Change views directory to template directory
app.set('views',templatePath);

hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("index.hbs");
});
app.get("/signup",(req,res)=>{
    res.render("signup.hbs");
});
app.get("/contact",(req,res)=>{
    res.render("contact.hbs");
});
app.get("/contact/*",(req,res)=>{
    res.render("404.hbs",{
        errorcomment:"OOPs Contact Page couldn't found Please click here to go back",
    });
});
app.get("/signup/*",(req,res)=>{
    res.render("404.hbs",{
        errorcomment:"OOPs Contact Page couldn't found",
    });
});

app.get("*",(req,res)=>{
    res.render('404',{
        errorcomment:"OOPs page couldn't found",
    });
});
app.listen(port,()=>{
    console.log(`Listening in port number ${port}`);
});