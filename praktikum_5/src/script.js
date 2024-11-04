// Hamburger Menu
function hamburgerToggle() { 
  const mobileMenu = document.getElementById('itemsnavbarMobile');
  mobileMenu.classList.toggle('hidden');
  // Hamburger Menu

}
const downloadBtn = document.getElementById('download');
downloadBtn.addEventListener('click', () => {
  alert('Waiting to Dowload App...');
  setTimeout(() => {
    alert('Download complete on:C:/path/path/Downloads');
  },3000);

});

const downloadBtn2 = document.getElementById('download2');
downloadBtn2.addEventListener('click', () => {
  alert('Waiting to Dowload App...');
  setTimeout(() => {
    alert('Download complete on:C:/path/path/Downloads');
  },3000);

});

// data user testimonials
const testimonials = [
    {
        img: "./img/Profile.jpg",
        name: "Samantha",
        profession: "Designer",
        comment: "“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “"
    },
    {
        img: "./img/profile2.jpg",
        name: "Kimberly",
        profession: "Developer",
        comment: "“ Hi, I’m Kim Kimberly. This app has improved my workflow significantly. I love the scheduling feature, and the interface is user-friendly.”"
    },
    {
        img: "./img/profile3.jpg",
        name: "Alex Sapurane",
        profession: "Project Manager",
        comment: "“ I’m Sir Alex Sapurane, and this app has been a game-changer for managing projects. Highly recommended for teams and individuals alike!”"
    }
];
// data 

let currentIndex = 0;

const profileImg = document.getElementById('profileImg');
const profileName = document.getElementById('userName');
const profileProfession = document.getElementById('profession');
const profileComment = document.getElementById('commentText');

const updateTestimonial = (index) => {
    profileImg.src = testimonials[index].img;
    profileName.textContent = testimonials[index].name;
    profileProfession.textContent = testimonials[index].profession;
    profileComment.textContent = testimonials[index].comment;
};


updateTestimonial(currentIndex);

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});
// testimonials carousel 






















































































































































































































































































































                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              //  Xyloz Ipsum:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              //  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              //  Thrik blorp xylar gron tharnak zeftor, glornak plik zorblix vrixon. Zenthor blark xyn grith nokra flornak quonzor ktharn zyplak. Fronak blarn threth glaxon zylar groznith, punyaku: Mohammad Arief Gunadi .  xithor blorp zenthy kroplix zorflak. Priznok thrik blarg von zyntho, xalron plax zorfon krynk!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              //  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              //  Kalak Glornith:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              //  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              //  Xyther zlyn thrak glonky zorax blarvon kothor blarnax zarnik. Xenth bloz krypth zygar zeeth flarnak blon veerth zorp grox. Blaxnok frith zlorna kyphor zyphrax gryoth blorn zyphlax. Glarp vorth frak blorp kloz xyther vynak.

