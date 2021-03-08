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

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/blog-api-routes.js")(app);
// // require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
app.post('/uploads/', (req, res) => {

  console.log('upload route hit' )

   upload(req, res, (err) =>{
      if(err){
          alert(err)
      } else {
      //     console.log( "File name & info" + " " + );
          // res.send("test")
          body = JSON.stringify(req.body)
          console.log("data received at server", body)
          res.json({message:'message received!'})
          sendMail(req.body,)
      }
  })
  
  
})

//Render the Index page on server run 
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'public', 'index.html'));
})


// Listener
app.listen(PORT, ()=>{
  console.log('Server is running on PORT,' , PORT);
})