// document.addEventListener('DOMContentLoad', () => {
    // document.getElementById("aboutMe").innerHTML = "It’s the second paragraph";

    // const aboutMe = document.getElementById('aboutMe');
    // aboutMe.style.backgroundColor = "red";
    // const aboutMeContent = aboutMe.innerHTML;
    // console.log(aboutMeContent)
// })
document.getElementById("aboutMe").innerHTML = ` 👋🏻 A Norway based frontend software developer with a background in graphics design and a passion for creating memorable and engaging web experiences with React. I am currently seeking a frontend developer position. Scroll down to see my latest work and find out more about me!`;

// create functions to update the ‘about me’ content.

const updateAboutMe = () => {
    document.getElementById("aboutMe").innerHTML = `Hello, I'm Goran 👋🏻A Norway based frontend software developer with a strong background in motion graphics design and a passion for creating memorable and engaging web experiences with React. I am currently seeking a frontend developer position.`;
    document.getElementById("aboutMeP").innerHTML = `Scroll down to see my latest work and find out more about me!`;
};
updateAboutMe()

// When you click the content that you have updated, the background color needs to be powderblue, and the font color needs to change to white.
function myFunction() {
    let paragraph = document.getElementById("aboutMe")
    paragraph.style.backgroundColor = "powderblue"
    paragraph.style.color = "white";    
    let paragraphP = document.getElementById("aboutMeP")
    paragraphP.style.backgroundColor = "powderblue"
    paragraphP.style.color = "white"; 
}
function myFunction1() {
    let paragraph = document.getElementById("aboutMe")
    paragraph.style.backgroundColor = "black"
    paragraph.style.color = "white"
    let paragraphP = document.getElementById("aboutMeP")
    paragraphP.style.backgroundColor = "black"
}
// Center and resize img "coding horror".

$("#about > div > div > div.col-lg-6.mt-5.mt-lg-0").css("text-align", "center");
$("#about > div > div > div:nth-child(1) > img").css("display", "block");
$("#about > div > div > div:nth-child(1) > img").css("margin-left", "auto");
$("#about > div > div > div:nth-child(1) > img").css("margin-right", "auto");
$("#about > div > div > div:nth-child(1) > img").css("width", "50%");
$("#about > div > div > div:nth-child(1) > img").css("width", "150px");
