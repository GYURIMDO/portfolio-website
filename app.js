let nav_items = document.querySelectorAll('.nav-items');
let tab_items = document.querySelectorAll('.tab-item');
let myInfo_content = document.querySelectorAll(".myInfo-content");



nav_items.forEach(nav_item => {
    nav_item.addEventListener("click", function() {
        for (let x = 0; x < nav_items.length; x++) {
            nav_items[x].classList.remove('active');
        }
        nav_item.classList.add("active");
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.onscroll = () => {
    const sections = document.querySelectorAll('.my-divs');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector("nav a[href*='" + id + "']").classList.add('active');
            });
        }
    });
};



// side navigation
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const side_nav = document.querySelector(".side-navigation");

openBtn.addEventListener('click', function() {
    side_nav.classList.add("visible");
})

closeBtn.addEventListener('click', function() {
    side_nav.classList.remove("visible");
    
})





// myInfo tab 
for (let x = 0; x < tab_items.length; x++) {
    tab_items[x].addEventListener('click',function(){
        for (let i = 0; i < tab_items.length; i++){
            tab_items[i].classList.remove('active');
        }
        tab_items[x].classList.add('active');
       
        for (let i = 0; i < myInfo_content.length; i++){
            myInfo_content[i].classList.add('invisible');
        }
        myInfo_content[x].classList.remove('invisible');
    })
}



//practice
let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

let prev = document.querySelector(".prev");
let next = document.querySelector('.next');
let project_contents = document.querySelectorAll('.project-content');
let projectIndex = 0;

//setting



next.addEventListener('click', function(){
    
    projectIndex++;
    projectIndex = projectIndex % 3 
    
    for (let x = 0; x < project_contents.length; x++) {
        project_contents[x].classList.add("invisible");
    }
    project_contents[projectIndex].classList.remove("invisible");
    
})

prev.addEventListener('click', function(){
    
    projectIndex--;
    if (projectIndex < 0) {
        projectIndex = 2;
    }
    for (let x = 0; x < project_contents.length; x++) {
        project_contents[x].classList.add("invisible");
    }
    project_contents[projectIndex].classList.remove("invisible");
    
    
})