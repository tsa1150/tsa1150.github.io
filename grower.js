document.getElementById("menu1").addEventListener("click", menuErector);
document.getElementById("arrow").addEventListener("click", nakedGrandma);
function menuErector()
{
    var menu = document.getElementById("menu1");
    var list = document.getElementById("list1");
    var image = document.getElementById("arrow");
    
    menu.classList.add("extended");
    menu.classList.remove('retract');
    list.classList.add("visible");
    list.classList.remove('hide');
    image.classList.toggle('show');
}

function nakedGrandma(e)
{
    e.stopPropagation();
    var menu = document.getElementById("menu1");
    var list = document.getElementById("list1");
    var image = document.getElementById("arrow");
    
    menu.classList.remove('extended');
    menu.classList.add("retract");
    list.classList.remove("visible");
    list.classList.add('hide');
    image.classList.toggle('show');
}
