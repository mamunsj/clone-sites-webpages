// var slidePosition = 1;
// // SlideShow(slidePosition);

// // forward/Back controls
// // function plusSlides(n) {
// //   SlideShow((slidePosition += n));
// // }

// //  images controls
// // function currentSlide(n) {
// //   SlideShow((slidePosition = n));
// // }

// // function SlideShow(n) {
// //   var i;
// //   var slides = document.getElementsByClassName("Containers");
// //   var circles = document.getElementsByClassName("dots");
// //   if (n > slides.length) {
// //     slidePosition = 1;
// //   }
// //   if (n < 1) {
// //     slidePosition = slides.length;
// //   }
// //   slides[slidePosition - 1].style.display = "block";
// // }

// var slidePosition = 1;
// function plusSlides(n) {
//   SlideShow((slidePosition += n));
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow((slidePosition = n));
// }
slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {
    slidePosition = 1;
  }
  slides[slidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 5000); // Change image every 2 seconds
}
