
let searchInput = document.querySelector(".search-input");
let searchButton = document.querySelector(".search-button");
let products = document.getElementById("collections");
let prodlist=products.querySelectorAll("div");
searchInput.addEventListener("keyup",(event)=>{
    let searchValue=event.target.value.toLowerCase();
    prodlist.forEach((item)=>{
        if(item.textContent.toLowerCase().includes(searchValue)){
            item.style.display="";
        }else{
            item.style.display="none";
            
        }
    })
    

})
searchButton.addEventListener("click",(event)=>{
     let searchValue=event.target.value.toLowerCase();
    prodlist.forEach((item)=>{
        if(item.textContent.toLowerCase().includes(searchValue)){
            item.style.display="";
        }else{
            item.style.display="none";
            
        }
})
});