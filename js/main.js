console.log("start");

class Link {
    constructor(path, name) {
        this.path = path;
        this.name = name;
    }
}
var links = [
    new Link("../index.html", "Home"),
    new Link("../Blog/index.html", "Blog"),
    new Link("../Documents/index.html", "Documents"),
    new Link("../SocialMedia/index.html", "Social Media"),
    new Link("../templates/template.html", "Templates"),
    new Link("../TorahToday/index.html", "Torah Today"),
    new Link("../Testimony/index.html", "Testimony"),
    new Link("../VideoTeachings/index.html", "Video Teachings"),
    new Link("../About/index.html", "About"),
];

window.addEventListener("load", init);
var dir = '';
function init() {

    let navbar = document.getElementById("NavBar");
    if (navbar) {
        navbar.addEventListener('click', function() {
            console.log("test");
        });
    }
    let navBar = document.getElementById("NavBar");
    navBar.innerHTML = "<li class='navigationBar'>";
    insertLinks(navBar, JSON.parse(JSON.stringify(links)), getLocation);
    // dir = './';
    // var fileExtension = '.html';

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
        
    // }
    // getLocation(navItems, windowPath);
}


/**
 * takes object of links and paths and inserts them into navBar
 * @param {HTMLElement} element 
 * @param {Link} list 
 * @param {Function} callback 
 */
function insertLinks(element, list, callback) {
    let value = list.shift();
    if (value) {
        element.innerHTML += "<ul class='navigationItem'><a href='" + value.path + "' class='href'>" + value.name + "</a></ul>\r\n";
        insertLinks(element, list);
    } else {
        console.log("list created");
        element.innerHTML += "</li>";
        let navItems = Array.from(document.getElementsByClassName("navigationItem"));
        let windowPath = window.location.hostname == "127.0.0.1" ? window.location.pathname.split("/")[1] : window.location.pathname.split("/")[2];
        getLocation(navItems, windowPath);
    }
}

function getLocation(elements, path) {
    

    console.log(elements);

    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];

        // Determines if on debug or production server to use appropriate tree location
        
        console.log(path);
        if (element.innerHTML.includes(path)) {
            element.className = element.className + " active";
        } else {
            element.className = element.className + " inactive";
        }      
    } 
}

document.addEventListener("click", function() {
    console.log(window.location.pathname);
});

