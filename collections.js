
let searchInput = document.querySelectorAll(".search-input");
let searchButton = document.querySelectorAll(".search-button");
let products = document.getElementById("collections");
let prodlist = products.querySelectorAll("div");

function filterProducts(searchValue) {
    prodlist.forEach((item) => {
        // Find the product name within the bold tag
        let productName = item.querySelector("b").textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

searchInput.forEach((input) => {
    input.addEventListener("keyup", (event) => {
        let searchValue = event.target.value.toLowerCase();
        filterProducts(searchValue);
    });
});

searchButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Find the corresponding input value. 
        // Assuming the button allows searching from the visible input. 
        // Since there might be multiple inputs, we need to find the one associated with this button interaction 
        // or just use the value from the event sibling if relevant.
        // However, usually buttons are clicked after typing in an input.
        // For the searchbar section, the input is the previous element sibling (ignoring text nodes).
        
        let searchBar = button.parentElement;
        let input = searchBar.querySelector(".search-input");
        if(input){
             filterProducts(input.value.toLowerCase());
        }
    });
});