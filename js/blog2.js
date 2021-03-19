$(document).ready(function() {
    console.log("in blog2.js")
    
    function getBlogs(){
        $.get("/api/blog" , function(data){
            console.log("Blogs", data)

        })
    }

getBlogs()
})