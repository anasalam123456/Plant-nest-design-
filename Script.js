let slider = document.getElementById("sliderimg");

document.getElementById("left").onclick = function () {
slider.scrollLeft -= 2000; // Scroll left
};

document.getElementById("right").onclick = function () {
slider.scrollLeft += 2000; // Scroll right
};
