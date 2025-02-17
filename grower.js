document.getElementById("menu1").addEventListener("click", menuErector);
document.getElementById("arrow").addEventListener("click", nakedGrandma);
function menuErector()
{
    var menu = document.getElementById("menu1");
    var list = document.getElementById("list1");
    
    menu.classList.add("extended");
    list.classList.add("visible");
}

function nakedGrandma()
{
    var menu = document.getElementById("menu1");
    var list = document.getElementById("list1");
    
    menu.classList.remove("extended");
    list.classList.remove("visible");
}
