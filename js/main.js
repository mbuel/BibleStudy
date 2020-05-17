console.log("start");

window.addEventListener("load", init);

function init() {
    let navItems = Array.from(document.getElementsByClassName("navigationItem"));
    let windowPath = window.location.hostname == "127.0.0.1" ? window.location.pathname.split("/")[1] : window.location.pathname.split("/")[2];
    let navbar = document.getElementById("NavBar");
    if (navbar) {
        navbar.addEventListener('click', function() {
            console.log("test");
        });
    }
    getLocation(navItems, windowPath);
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

