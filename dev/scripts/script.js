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
    // Click on video thumbnail or link
    $(".js-trigger-video-modal").on("click", function(e){
      
      // prevent default behavior for a-tags, button tags, etc. 
        e.preventDefault();
          
      // Add class to the body to visually reveal the modal
      $("body").addClass("show-video-modal noscroll");
    
  });

  $('.overlay, .close-video-modal').on('click', function(e) {
      // prevent default behavior for a-tags, button tags, etc. 
      e.preventDefault();
    console.log("click");
    $("body").removeClass("show-video-modal noscroll");
  // call the close and reset function
  });
  // if the 'close' button/element, or the overlay are clicked 

        

  // if the ESC key is tapped
  $('body').keyup(function(e) {
      // ESC key maps to keycode `27`
      if (e.keyCode == 27) { 
        
        // call the close and reset function
        $("body").removeClass("show-video-modal noscroll");
        
      }
  });

