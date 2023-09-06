var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)

    // 1 (c) Determine new stylesheet file name

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    document.getElementById("MyElement").classList.toggle('MyClass');

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)

    // 2 (b) get html style element by ID

    // 2 (c) replace href attribute of html element.
    
}


/*
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");


document.getElementById("MyElement").classList.add('MyClass');
document.getElementById("MyElement").classList.remove('MyClass');
document.getElementById("MyElement").classList.contains('MyClass') )
document.getElementById("MyElement").classList.toggle('MyClass');
*/

function light_mode() {
    document.getElementById('page_style').setAttribute("href", "light.css");
}

function dark_mode() {
    document.getElementById('page_style').setAttribute("href", "dark.css");
}