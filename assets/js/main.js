// ********** fixed navbar ************
const navbar = document.querySelector('.navbar');
const topLink = document.querySelector(".top-btn");

window.addEventListener("scroll", ()=>{
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if(scrollHeight > navHeight){
    navbar.classList.add('stiky');
  } else {
    navbar.classList.remove("stiky")
  }

  // setup for top-btn

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
})

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".nav__link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;

    if(navHeight > 100){
      position += navHeight
    }
    window.scrollTo({
      left:0,
      top:position
    })
  })
})

// ********** mobile menu ************

const navList = document.querySelector(".nav__list");
const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.querySelectorAll(".nav__link");

toggleBtn.addEventListener('click',() => {
  navList.classList.toggle('show');
})

navLinks.forEach((link) => {
  link.addEventListener('click',()=>{
    navList.classList.remove("show")
  })
})