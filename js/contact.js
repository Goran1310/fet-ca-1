// create a single function with the following 3 variables: email, telephone_number, address
function contact() {
    // var email = document.getElementById('email').value;
    // var telephone_number = document.getElementById('telephone_number').value;
    // var address = document.getElementById('address').value;
    let email = prompt("Please input email address. \n Make it containing both a '@' and '.' ");
    let telephone_number = prompt("Please input telephone number. \n Make sure it correct format");
    let address = prompt("Please input your address \n (e.g. 1445 West Norwood Avenue in Itasca, Illinois");
}
// In the index.html file, in the ‘contact’ section, add a Button.
// When this button is clicked, the following should happen in the function
// 1. Ask the user for information.

// You must store this information in the 3 variables created in the contact.js file. Make sure that data is received from the user input, and that it is in the correct format (e.g., make sure the user enters an email address containing both a '@' and '.' ).

//  2. Change the current contact information (email, telephone number, and address) to the input data in these 3 new variables.

// This must be done using jQuery selectors, without adding more HTML IDs to the ‘contact’ section.

//  3. Print the data entered to the console in the following format:

// From: email@emailaddress.co.za
// Contact: 0458754125
// Address: 12 Smith Road, John Park.