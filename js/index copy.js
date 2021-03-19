// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("uk-navbar-container");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }










//======================================================
// original code with coppied example
//======================================================

// $(document).ready(function() {
// console.log("inside index.js")

// function getProjects ( ){
//     $.get("/api/projects", function(data){
//         console.log("projects, ", data);
//     })
// }

// getProjects();
// $(document).on("click", "button.delete", handlePostDelete);
// $(document).on("click", "button.edit", handlePostEdit);

  // This function grabs posts from the database and updates the view
//   function getPosts(author) {
//     authorId = author || "";
//     if (authorId) {
//       authorId = "/?author_id=" + authorId;
//     }
//     $.get("/api/posts" + authorId, function(data) {
//       console.log("Posts", data);
//       posts = data;
//       if (!posts || !posts.length) {
//         displayEmpty(author);
//       }
//       else {
//         initializeRows();
//       }
//     });
//   }
//   app.get("/api/posts", function(req, res) {
//     var query = {};
//     if (req.query.author_id) {
//       query.AuthorId = req.query.author_id;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Post.findAll({
//       where: query,
//       include: [db.Author]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });




// })
