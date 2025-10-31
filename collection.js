var prodcon = document.getElementById("product");
var search = document.getElementById("search");
var productlist = prodcon.querySelectorAll("div");

search.addEventListener("keyup", function(event){
    var enter = event.target.value.toUpperCase();
    for(let count = 0; count < productlist.length; count++){
        var productname = productlist[count].querySelector("p").textContent.toUpperCase();

        if(productname.indexOf(enter) < 0){
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
