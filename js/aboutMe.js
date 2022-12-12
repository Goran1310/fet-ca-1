// create functions to update the ‘about me’ content.
// const updateAboutMe = () => {
//   const aboutYou = document.getElementById('about-me-paragraph1');
//   const aboutMeContent = aboutYou.innerHTML;
//   aboutYou.innerHTML = aboutMeContent.replace('something about you')
// Change all the "Something about me text" to something about you when the page loads. 
// This could be anything, hobbies, what you like or do not like, your pet's names, or where you live.
//  All the "Something about me text" needs to be changed from the function. 
// The information can be real or made up

//  When you click the content that you have updated, the background color needs to be powderblue, and the font color needs to change to white.
document.addEventListener('DOMContentLoaded', () => {
    const aboutYou = document.getElementById('about-me-paragraph1');
    aboutYou.innerText = 'Something about You'
    console.log(aboutYou.innerText)
    // console.log(aboutYou);
    // const aboutMeContent = aboutYou.innerHTML;
    // aboutYou.innerHTML = aboutMeContent.replace('something about you')

    const aboutMe = document.getElementById('about-me');
    // aboutMe.style.backgroundColor = 'powderblue';
})
