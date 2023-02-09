// Write your JavaScript here...
const btnBurger = document.getElementById("btn-burger");
const nav = document.getElementById("main-nav");
const header = document.getElementsByTagName("header")[0];

// remove default behaviour of burger button focus state
btnBurger.addEventListener('mousedown', function(e){
    e.preventDefault();
});

// handle click event on burger button
btnBurger.addEventListener('click', clickMenu);

function clickMenu(){
	header.classList.toggle('show'); // show/hide dropdown nav
	nav.classList.add('activated'); // add transition on nav height
}

// remove classes when window is resized to reflow width
window.addEventListener("resize", removeTransition);

function removeTransition(e){
	if(window.innerWidth > 1000){
		header.classList.remove('show'); // hide dropdown nav
        nav.classList.remove('activated'); // remove transition on nav height
	}
}

