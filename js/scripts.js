// From: https://www.w3schools.com/howto/howto_js_slideshow.asp
function slideshow() {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }
}

// From: https://www.w3schools.com/howto/howto_js_accordion.asp
function accordion(){
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

// From: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function navbar() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// From: Web App Labs
function validate(){
  var pNum = $("#phone").val();
  if (isNaN(pNum) || pNum.length != 10){
    alert("Phone number is not valid. Must contain only 10 digits and no dashes or spaces.");
    return false;
  }

  var dEntered = $("#date").val();
  var dob = new Date(dEntered);

  if (dob >= new Date()){
    alert("Date of Birth is not valid. Date has to be before today.");
    return false;
  }
}
