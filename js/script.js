
const listItem= document.querySelectorAll(".item");


//
listItem.forEach((itemLi)=>{
        itemLi.addEventListener("click",(evento)=>{
        const activoItem=document.querySelector(".activo");
        activoItem.classList.remove("activo");
        evento.target.classList.add("activo");
    })
});