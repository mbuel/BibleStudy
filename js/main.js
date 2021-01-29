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
    navbar.addEventListener("click", function () {
      console.log("test");
    });
  }
  let navBar = document.getElementById("NavBar");
  navBar.innerHTML = "<li class='navigationBar'>";
  insertLinks(navBar, JSON.parse(JSON.stringify(links)), getLocation);
}


/**
 * takes object of links and paths and inserts them into navBar
 * @param {HTMLElement} element 
 * @param {Link} links 
 * @param {Function} callback 
 */
function insertLinks(element, links, callback) {
  if (!links[0]) {
    console.log("list created");
    element.innerHTML += "</li>";
    let navItems = Array.from(
      document.getElementsByClassName("navigationItem")
    );
    const windowPath = window.location.pathname;
    const pathList = windowPath.split("/");
    const path = pathList[pathList.length - 2];
    // window.location.hostname == "127.0.0.1"
    //     ? window.location.pathname.split("/")[1]
    //     : window.location.pathname.split("/")[2];
    getLocation(navItems, path);
  } else {
    let { path, name } = links.shift();
    if (path && name) {
      element.innerHTML +=
        "<ul class='navigationItem'><a href='" +
        path +
        "' class='href'>" +
        name +
        "</a></ul>\r\n";
      insertLinks(element, links);
    }
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

