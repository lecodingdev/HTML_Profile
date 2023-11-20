// JavaScript function for an auto slider

const skillImages = document.querySelectorAll(".skill-image");
const skillTexts = document.querySelectorAll(".skill-text");
const imageSources = [
  "assets/image/html.svg",
  "assets/image/css.svg",
  "assets/image/js.svg",
  "assets/image/node.svg",
  "assets/image/react.svg",
];
const skillTextsArray = ["HTML", "CSS", "JavaScript", "Node.js", "React"];
let currentIndex = 0;

function reloadImages() {
  currentIndex = (currentIndex + 1) % imageSources.length;

  // Update all skill images and texts
  skillImages.forEach((image, index) => {
    image.src = imageSources[(currentIndex + index) % imageSources.length];
  });

  // Update all skill texts
  skillTexts.forEach((text, index) => {
    text.textContent =
      skillTextsArray[(currentIndex + index) % skillTextsArray.length];
  });
}

// Set an interval to reload the images every 3 seconds (3000 milliseconds)
setInterval(reloadImages, 3000);
