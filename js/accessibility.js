// Create an ‘accessibility.js’ file in the correct folder.

// In the Accessibility’ section, we have a visual aid for users who struggle to read small font, in the form of a Toggle Switch. 
// When the user clicks this Toggle Switch to the ‘On’ position, all text on the web page within <p> tags need to be increased by 20%. 
// When the user clicks the Toggle Switch back to the ‘Off’ position, all text on the web page within <p> tags 
// need to be decreased back to the original size. Create a single function in the file that accomplishes this.

// ALTERNATIV 1
$(document).ready(function() {
    $(".checkbox").click(function() {
        $("p").toggleClass("pClass");
    });
});         
// ALTERNATIV 2
jQuery(document).ready(function($) {
    $(".checkbox").toggleSwitch();
    $("#opt2").trigger("click"); // turn it on
  });