// Create a <style> tag
var style = document.createElement('style');

// CSS rules to be added
var css = `
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap');
body {
    background-image: url('https://bing.biturl.top/?resolution=1920&format=image');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    margin: 0;
    padding: 0;
}

#page.drawers , #region-main , .card , .list-group-item {
    background-color: rgba(0, 0, 0, 0);
}

#page.drawers .main-inner{
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
}


#page-footer{
    display: none;
}
a{
    transition: color 0.5s ease-out;
    border-bottom: 0 solid rgba(255, 255, 255, 0);
}

a:hover{
    transition: color 0.5s ease-out;
    text-decoration: none;
    color: rgba(254, 3, 3, 0.66);
}

.bg-white{
    background-color: rgba(255, 255, 255, 0)!important;
    background: linear-gradient(to right,#0000009F,rgba(255, 255, 255, 0.46),#00000055);
}

.primary-navigation .navigation .nav-link{
    color: rgb(255, 255, 255);
}
.moremenu .nav-link:hover, .moremenu .nav-link:focus {
    background-color: #f8f9fa00;
}

.moremenu .nav-link.active:focus, .moremenu .nav-link.active:hover {
    background-color: #ffffff00;
}


.navbar-light .navbar-nav .nav-link.active
{
    border-radius: 0;
    color: #d3d3d3;
}

.navbar-light .navbar-nav .nav-link.active:hover{
    color: rgb(0, 0, 0);
}



.navbar-toggler-icon{
    filter: invert(1);
}

.nav-link:focus{
    box-shadow: none;
}

.secondary-navigation {
    background-color: rgba(255, 255, 255, 0);
}

.secondary-navigation .moremenu .nav-tabs .nav-link {
    color: #000000ba;
}

.secondary-navigation .moremenu .nav-tabs .nav-link.active {
    border-bottom: 0;}

.secondary-navigation .moremenu .nav-tabs .nav-link:hover{
    background-color: #ffffff00;
    color:  #000000;}

.drawer {
        border-radius: 5px;
        background-color: #ffffffcf;}
`;

// Set the CSS rules in the <style> tag
style.appendChild(document.createTextNode(css));

// Add the <style> tag to the <head>
document.head.appendChild(style);

function increaseZoom() {
    // Increase the zoom level to 125%
    document.body.style.zoom = 1.25;
  }
  
  // Call the function to increase the zoom level
increaseZoom();
  
