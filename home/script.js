// Scroll event

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.style.backgroundColor= "black"; 
   }
    else {
    navbar.style.backgroundColor = "transparent"; 
     
  }
});


// Expand image
let eventText = document.querySelector('.event_text');
let eventImg = document.querySelector('.event_img');
let eventImage = document.querySelector('.event_image');
let overlay = document.querySelector('.overlay');
let expanded = document.querySelector('.expanded');
let ev_img = document.querySelector('.ev_img');
let eventRow = document.querySelector('.event_row');

eventImage.addEventListener('click', ()=>{
  eventText.style.display = "none";
  eventImg.style.display = "none";
  overlay.style.display = "block";
  expanded.style.display = "block";
  eventRow.classList.add('justify-content-center');
})


        
   ev_img.addEventListener('click', ()=>{
  eventText.style.display = "block";
  eventImg.style.display = "block";
  overlay.style.display = "none";
  expanded.classList.add('fadeTwo');
  expanded.style.display = "none";
  eventRow.classList.remove('justify-content-center');
   })
