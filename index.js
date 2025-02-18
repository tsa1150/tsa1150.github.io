const text1 = getElement("text1");
const text2 = getElement('text2');
const text3 = getElement('text3');
const texts = [text1, text2, text3];

const drop1 = getElement("drop1");
const drop2 = getElement("drop2");
const drop3 = getElement("drop3");

var blurbChanger = [0, 0, 0];

drop1.addEventListener("click", dropdownFunction);
drop2.addEventListener("click", dropdownFunction);
drop3.addEventListener("click", dropdownFunction);


function getElement(id)
{
    return document.getElementById(id);
}

function dropdownFunction(e)
{
    e.stopPropagation();
    var dropdown = document.getElementById(e.target.id);
    var id = e.target.id[4];
    var text = document.getElementById(`text${id}`);

    dropdown.classList.toggle("clicked");
    if (text.classList.contains("extended"))
    {
        text.classList.remove("extended");
        text.classList.add("retracted");
    }
    else
    {
        text.classList.add("extended");
        text.classList.remove("retracted");
    }
}
