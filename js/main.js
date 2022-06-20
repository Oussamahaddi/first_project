
// add nav bar

let navBar = document.querySelector("#nav-bar");
    logo = document.querySelector("#logo");
    cart = document.querySelector("#cart");
    avatar = document.querySelector("#avatar");
    ul = document.querySelector(".blured");
    body = document.body;
    closeBtn = document.querySelector("#close-icon");
    cartBox = document.querySelector("#cart-box");
    nextImg = document.querySelector(".next");
    previousImg = document.querySelector(".previous");
    allImg = document.querySelectorAll(".small");
    mainImg = document.querySelector(".main-img");

// show and hide nav bar

navBar.addEventListener("click", _ => {
    ul.style.display = "block";
})

closeBtn.addEventListener("click", _ => {
    ul.style.display = "none";
});

// show and hide cart box

function show() {
    if (cartBox.style.display == "none") {
        cartBox.style.display = "block"
    } else {
        cartBox.style.display = "none"
    }
}

cart.addEventListener("click", show);


// show next and previous img

allImg.forEach(el => {
    el.addEventListener("click", function () {
        // remove ativated class
        allImg.forEach(img => img.classList.remove("selected-img"));
        mainImg.src = this.src;
        this.classList.add("selected-img");
    })
});

let myImage = ["./sass/images/image-product-1.jpg", "./sass/images/image-product-2.jpg", "./sass/images/image-product-3.jpg", "./sass/images/image-product-4.jpg"]
let i = 0;  // current index of image

nextImg.onclick = function () {
    if (i <= 0) i = myImage.length;
    i--;
    return setFunc();
}

previousImg.onclick = function () {
    if (i >= myImage.length - 1) i = -1;
    i++;
    return setFunc();
}

function setFunc() {
    return mainImg.src = myImage[i];
}


