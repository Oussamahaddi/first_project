
// add nav bar

let navBar = document.querySelector("#nav-bar");
    logo = document.querySelector("#logo");
    cart = document.querySelector("#cart");
    avatar = document.querySelector("#avatar");
    ul = document.querySelector(".blured");
    body = document.body;
    closeBtn = document.querySelector("#close-icon");
    insideCart = document.querySelector("#inside-cart")

// show and hide nav bar

navBar.addEventListener("click", _ => {
    ul.style.display = "block";
})

closeBtn.addEventListener("click", _ => {
    ul.style.display = "none";
});


// show and hide cart items 

function items() {
    if (insideCart.style.display == "none") {
        insideCart.style.display = "flex"
    } else {
        insideCart.style.display = "none"
    }
}

cart.onclick = items;


