
// add nav bar

let navBar = document.querySelector("#nav-bar");
    logo = document.querySelector("#logo");
    cart = document.querySelector("#cart");
    avatar = document.querySelector("#avatar");
    ul = document.querySelector(".blured");
    body = document.body;
    closeBtn = document.querySelector("#close-icon");
    cartBox = document.querySelector("#cart-box")

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

cart.addEventListener("click", show)


