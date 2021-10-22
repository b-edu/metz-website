function blog_alert() {
    alert("Blog posts will be opened soon!")
}

// Get the button on the blog page as an object
let blog_button = document.getElementById("blog_button");

// Execute the function defined below when `blog_button` is clicked
blog_button.onclick = function() {
    blog_alert();
}