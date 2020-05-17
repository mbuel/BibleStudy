console.log("start");

window.addEventListener("load", init);

function init() {
    let navbar = document.getElementById("NavBar");
    if (navbar) {
        navbar.addEventListener('click', function() {
            console.log("test");
        });
    }
    getLocation();
}

function getLocation() {
    let navItems = Array.from(document.getElementsByClassName("navigationItem"));

    console.log(navItems);
    navItems.forEach(function(element) {
        let windowPath = window.location.pathname.split("/")[1];
        console.log(windowPath);
        if (element.innerHTML.includes(windowPath)) {
            element.className = element.className + " active";
        } else {
            element.className = element.className + " inactive";
        }       
    });
}

document.addEventListener("click", function() {
    console.log(window.location.pathname);
});

