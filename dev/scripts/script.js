// Write your JavaScript here...
    
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


