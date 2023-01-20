document.querySelector("#slider").addEventListener("input", function(e) {
    let sliderPos = e.target.value;
    // Update the width of the foreground image
    document.querySelector('.foreground-img').style.width = `${sliderPos}%`;
    // Update the position of the slider button
    document.querySelector('.slider-button').style.left = `calc(${sliderPos}% - 18px)`;
});
document.querySelector("#slider").addEventListener("change", function(e) {
    let sliderPos = e.target.value;
    // Update the width of the foreground image
    document.querySelector('.foreground-img').style.width = `${sliderPos}%`;
    // Update the position of the slider button
    document.querySelector('.slider-button').style.left = `calc(${sliderPos}% - 18px)`;
});

document.querySelector('.slider-button').addEventListener("mousedown", function(e) {
    e.target.classList.add('active');
});

document.querySelector('.slider-button').addEventListener("mouseup", function(e) {
    e.target.classList.remove('active');
});

document.querySelector('.slider-button').addEventListener("mouseout", function(e) {
    e.target.classList.remove('active');
});
