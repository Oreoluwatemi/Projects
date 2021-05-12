const imgArr = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"];

let myImage = document.getElementById("myImg");

function exit() {
    var answer = confirm("Are you sure you want to exit?")

    if (answer == true)
        window.open("thanks.html")
}

function displayImageOnClick(src_) {
    myImage.src = src_
}

function moveForward() {
    let index = imgArr.findIndex(img => myImage.src.includes(img));
    index++;
    if (index < imgArr.length) {
        myImage.src = imgArr[index];
    } else if (index == imgArr.length) {
        index = 0
        myImage.src = imgArr[index];
    }
}

function moveBack() {
    let index = imgArr.findIndex(img => myImage.src.includes(img));
    index--
    if (index >= 0) {
        myImage.src = imgArr[index];
    }
    if (index < 0) {
        index = imgArr.length - 1
        myImage.src = imgArr[index];
    }
}
