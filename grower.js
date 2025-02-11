document.getElementById("menu1").addEventListener("click", menuErector);
function menuErector()
{
    var menu = document.getElementById("menu1");
    var list = document.getElementById("list1");
    
    menu.classList.toggle("extended");
    list.classList.toggle("visible");
}
