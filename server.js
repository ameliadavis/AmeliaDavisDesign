// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
const sendMail = require('./mail')

var path = require("path");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Post Route
//===============================================================
app.post('/MailDataServer', (req, res) => {

  const {subject, email, text}= req.body;
  console.log('server post route hit', req.body )

   sendMail(subject, email, text, function(err,data){
     if(err){
     res.status(500).json({ message: 'internal Error'});
   }else{
      res.json({ message: 'Email Sent!!'});
   }
   });

})

// HTML Routes
//  ================================================================
// app.get('/', (req, res)=>{
//   res.sendFile(path.join(__dirname,'./public', 'index.html'));
// })

app.get('/', (req, res)=>{
  res.sendFile( __dirname +'/public/index.html');
})

app.get("/MyWork", function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'work.html'));
});

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get("/BlogHome", function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'BlogHome.html'));
});


// Listener
//==========================================================
app.listen(PORT, ()=>{
  console.log('Server is running on PORT,' , PORT);
})