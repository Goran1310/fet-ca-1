// Create an ‘accessibility.js’ file in the correct folder.

// In the Accessibility’ section, we have a visual aid for users who struggle to read small font, in the form of a Toggle Switch. 
// When the user clicks this Toggle Switch to the ‘On’ position, all text on the web page within <p> tags need to be increased by 20%. 
// When the user clicks the Toggle Switch back to the ‘Off’ position, all text on the web page within <p> tags 
// need to be decreased back to the original size. Create a single function in the file that accomplishes this.

// // ALTERNATIV 1
   
$(document).ready(function() {
    $(".checkbox").click(function() {
        $("p").toggleClass("pClass");
    });
});      
// ALTERNATIV 2
// jQuery(document).ready(function($) {
//     $(".checkbox").toggleSwitch();
//     $("#opt2").trigger("click"); // turn it on
//   });

// https://stackoverflow.com/questions/27315311/jquery-toggle-switch-programmatcally-on-off
// https://www.w3schools.com/howto/howto_css_switch.asp
// document.querySelectorAll('input[type="checbox]')
// ID className and tagName + querrySelectorAll