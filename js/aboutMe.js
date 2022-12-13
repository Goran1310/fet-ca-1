// document.addEventListener('DOMContentLoad', () => {
    // document.getElementById("aboutMe").innerHTML = "It’s the second paragraph";

    // const aboutMe = document.getElementById('aboutMe');
    // aboutMe.style.backgroundColor = "red";
    // const aboutMeContent = aboutMe.innerHTML;
    // console.log(aboutMeContent)
// })
document.getElementById("aboutMe").innerHTML = ` 👋🏻 A Norway based frontend software developer with a strong background in motion graphics design and a passion for creating memorable and engaging web experiences with React. I am currently seeking a frontend developer position. Scroll down to see my latest work and find out more about me!`;

// create functions to update the ‘about me’ content.

const updateAboutMe = () => {
    document.getElementById("aboutMe").innerHTML = `Hello, I'm Goran 👋🏻A Norway based frontend software developer with a strong background in motion graphics design and a passion for creating memorable and engaging web experiences with React. I am currently seeking a frontend developer position.`;
    document.getElementById("aboutMeP").innerHTML = `Scroll down to see my latest work and find out more about me!`;

//   const aboutMe = document.getElementById('aboutMe');
//   const aboutMeContent = aboutMe.innerHTML;
//   aboutMe.innerHTML = aboutMeContent.replace(`Hello, I'm Goran 👋🏻A Kansas City based frontend software developer with a strong background in motion graphics design and a passion for creating memorable and engaging web experiences with React. I am currently seeking a frontend developer position. Scroll down to see my latest work and find out more about me!`);
//   return aboutMe;
};
updateAboutMe()

// When you click the content that you have updated, the background color needs to be powderblue, and the font color needs to change to white.
function myFunction() {
    let paragraph = document.getElementById("aboutMe")
    paragraph.style.backgroundColor = "powderblue"
    paragraph.style.color = "white";    
}