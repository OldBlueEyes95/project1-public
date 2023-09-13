// TODO implement style selector bar

// function light_mode() {
//     document.getElementById("page_style").setAttribute("href", "light.css");
// }

// function dark_mode() {
//     document.getElementById("page_style").setAttribute("href", "dark.css");
// }

function toggleStyleSheet() {
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var cur_style = document.getElementById("site_style").getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    if (cur_style === "stylegeneralB.css") {
        cur_style = "stylegeneralC.css";
    }
    else if (cur_style === "stylegeneralC.css") {
        cur_style = "stylegeneralB.css";
    }
    else {
        cur_style = "stylegeneralB.css"; // shouldn't be needed, but hey, what do I know
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    // document.getElementById("MyElement").classList.toggle('MyClass');
    document.getElementById("site_style").setAttribute("href", cur_style);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("prev_style", cur_style);
}


window.onload = function(){
    // TASK 2
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    // 2 (b) get html style element by ID
    // 2 (c) replace href attribute of html element.
    var prev_style = localStorage.getItem("prev_style");
    if (!((prev_style === "stylegeneralC.css") || (prev_style === "stylegeneralC.css"))) {
        localStorage.setItem("prev_style", "stylegeneralB.css")
    }
    document.getElementById("site_style").setAttribute("href", localStorage.getItem("prev_style"));
}


/*
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");


document.getElementById("MyElement").classList.add('MyClass');
document.getElementById("MyElement").classList.remove('MyClass');
document.getElementById("MyElement").classList.contains('MyClass') )
document.getElementById("MyElement").classList.toggle('MyClass');
*/