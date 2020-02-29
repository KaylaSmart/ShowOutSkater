var images = [ "images2/blackgold.png","images2/IMG_2146.jpg", "images2/IMG_2144.png",
"images2/IMG_2143.png",
"images2/IMG_2260.jpg",
"images2/IMG_2261.png",
"images2/IMG_2284.png",
"images2/IMG_2262.png",
"images2/IMG_2260.png",
"images2/IMG_2259.png",
"images2/IMG_2135.png",
"images2/IMG952283.png",
"images2/IMG952145.png" ];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;



// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='300px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;



  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}



// This will run the display image function as soon as the page loads.
displayImage();
