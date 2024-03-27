
document.getElementById('play').onclick = function () {
    document.getElementById('myVideo').play();
};

const cursorTag = document.querySelector("div.cursors")
// const ballMessage = cursorTag.querySelector("div span")
// const images = document.querySelector("div[data-hover]")

const heroSec1 = document.querySelector(".hero-sec1")
let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0
let speed = 0.1

const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed
    requestAnimationFrame(animate)

    cursorTag.style.left = currentX + "px"
    cursorTag.style.top = currentY + "px"
}
animate()
document.addEventListener("mousemove", function (event) {

    aimX = event.pageX
    aimY = event.pageY
})


console.log(cursorTag)

heroSec1.addEventListener("mouseover", function () {
    cursorTag.classList.add("visible")
    cursorTag.innerHTML = "Click to untie"
})

heroSec1.addEventListener("mouseout", function () {
    cursorTag.classList.remove("visible")
})
const video = document.querySelector("#myVideo")
heroSec1.addEventListener("click", function () {
    if (video.paused == true) {
        video.play();

    } else {


    }
});