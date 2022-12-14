function contact() {
    // create a single function with the following 3 variables: email, telephone_number, address
    let email = prompt("Please input email address and make it containing both a '@' and '.' \n \n Example of valid email: \n mysite@ourearth.com \n my.ownsite@ourearth.org\n mysite@you.me.net");
    let telephone_number = parseInt(prompt("Please input telephone number and make sure it correct format\n\nJust numbers no spaces and signs\nExample of valid telephone number:4790665519"));
    let address = prompt("Please input your address \n (e.g. 1445 West Norwood Avenue in Itasca, Illinois");
    // Print the data entered to the console
    console.log(`From: ${email}\nContact: ${telephone_number}\nAddress: ${address}`)
// ----------Make sure that data is received from the user input
    if (email.indexOf('@') > -1 && email.indexOf('.') > -1) {
        if(email !== "" && email.length>5 || telephone_number !== "" && telephone_number.length>5|| address !== "" && address.length>7 ) {
            alert("Thank You!😊 \n You have entered an valid email address, telephone number and address!");
            // Change the current contact information (email, telephone number, and address) to the input data
            $("document").ready(function() {
                $("#contactDetails p[class]").first().replaceWith(`<p class="text-muted">${telephone_number}</p>`);
                $("p:contains('@')").replaceWith(`<p class=\"text-muted\">${email}</p>`);
                $("#contactDetails p[class]").last().replaceWith(`<p class="text-muted">${address}</p>`);
                // $("#contactDetails p:nth-child(2)").css("background-color", "yellow");
            })
            return;
        } else {
            alert("You have entered an invalid email address, telephone number and address!")
            return (false)
        }
    } else {
    alert("You have entered an invalid email address!")
    }
    return {email, telephone_number, address}
}
// In the index.html file, in the ‘contact’ section, add a Button.
// When this button is clicked, the following should happen in the function
// 1. Ask the user for information.
// You must store this information in the 3 variables created in the contact.js file.
//  Make sure that data is received from the user input, and that it is in the correct format (e.g., make sure the user enters an email address containing both a '@' and '.' ).
//  2. Change the current contact information (email, telephone number, and address) to the input data in these 3 new variables.
// This must be done using jQuery selectors, without adding more HTML IDs to the ‘contact’ section.
//  3. Print the data entered to the console in the following format:
// From: email@emailaddress.co.za
// Contact: 0458754125
// Address: 12 Smith Road, John Park