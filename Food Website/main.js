const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
    })
)

closeIcon.addEventListener("click",() => {
    navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
});

// main.js
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Set initial theme and icon based on localStorage
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light") {
    htmlElement.setAttribute("data-theme", "light");
    themeToggle.classList.remove("ri-moon-line");
    themeToggle.classList.add("ri-sun-line");
  } else {
    htmlElement.setAttribute("data-theme", "dark");
    themeToggle.classList.remove("ri-sun-line");
    themeToggle.classList.add("ri-moon-line");
  }

  // Toggle theme and update icon + localStorage
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Toggle icon
    if (newTheme === "light") {
      themeToggle.classList.remove("ri-moon-line");
      themeToggle.classList.add("ri-sun-line");
    } else {
      themeToggle.classList.remove("ri-sun-line");
      themeToggle.classList.add("ri-moon-line");
    }
  });
});



// tabs 

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all=document.querySelectorAll(".item_wrap");
const foods=document.querySelectorAll(".food");
const beverages=document.querySelectorAll(".beverage");
const snacks=document.querySelectorAll(".snack");


tabs.forEach(tab =>{
  tab.addEventListener("click",()=>{
    tabs.forEach(item => {
      item.classList.remove("active");
    });
    tab.classList.add("active");

    const tabval= tab.getAttribute('data-tabs');
    
    all.forEach(item => {
      item.style.display="none";
    });

    if(tabval=='food'){
       foods.forEach(item => {
        item.style.display="block";
      });
    }
    else if(tabval=='snack'){
       snacks.forEach(item => {
        item.style.display="block";
      });
    }
    else if(tabval=='beverage'){
       beverages.forEach(item => {
        item.style.display="block";
      });
    }
    else{
       all.forEach(item => {
        item.style.display="block";
      });
    }
  });
});

// slider
const scrollUp = () =>{
  const scrollUpbtn = document.getElementById("scroll-up");

  if(this.scrollY >= 250){
    scrollUpbtn.classList.remove("-bottom-1/2");
    scrollUpbtn.classList.add("bottom-4");
  }else{
    scrollUpbtn.classList.add("-bottom-1/2");
    scrollUpbtn.classList.remove("bottom-4");
  }
}
window.addEventListener("scroll",scrollUp);

const scrollHeader = ()=>{
  const header = document.getElementById("header");

  if(this.scrollY >= 50){
    header.classList.add("border-b","border-amber-300","bg-blue-950","dark:bg-gray-900");
  }else{
    header.classList.remove("border-b","border-amber-300");
  }
}
window.addEventListener("scroll",scrollHeader);

//active link
const activeLink = () =>{
  const sections = document.querySelectorAll("section");
  const navlinks = document.querySelectorAll("nav__link");

  let current ='home';
  sections.forEach(section =>{
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60){
      current = section.getAttribute("id");
    }
  });

  navlinks.forEach(item =>{
    item.classList.remove("text-amber-300");
    if(item.href.includes(current)){
      item.classList.add("text-amber-300");
    }
  })
}
window.addEventListener("scroll",activeLink);


//scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__img");
sr.reveal(".home__content", { origin: "bottom" });  
sr.reveal(".category__card ", { interval:300 });

sr.reveal(".promo__card-1", { origin: "left" });  
sr.reveal(".promo__card-2", { origin: "right" });  

sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });  

sr.reveal(".menu_items", { origin: "left" });  

sr.reveal(".customer__review", { origin: "right" });  

sr.reveal(".footer");  



