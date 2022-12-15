// create a jQuery function that selects the HTML element with the “liveToastBtn” ID and shows the HTML Toast element with the ID of ‘liveToast’. 
// This function should be run when the user clicks the ‘Like’ button in the HTML header.
$(document).ready(function(){
    $("#liveToastBtn").click(function(){
        $("#liveToast").show();
        $("#liveToast").click(function(){
          $("#liveToast").hide();
    });
  });
})

// Make a copy of the ‘Like’ button element in the HTML file and place it directly after
//  the existing ‘Like’ button element. Change the button text to “I’m Bored” and the element’s ID to “boredBtn”. 
// In the same ‘welcome.js’ file, create another function that executes a GET Request to the “https://www.boredapi.com/api/activity/” API, once the new “I’m Bored” button is clicked.
//  The response from this API Request should be logged into the web console.

$(document).ready(function(){
    $("#boredBtn").click(function(){
        var request = new XMLHttpRequest();
        request.open('GET', "https://www.boredapi.com/api/activity/");
        request.onload = function() {
	    var response = request.response;
	    var parsedData = JSON.parse(response);
	    console.log(parsedData);
        }
        request.send();
    });
  });



