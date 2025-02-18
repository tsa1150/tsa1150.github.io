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
//San Francisco from the Marin Headlands on August 22, 2022
//Noah Friedlander - Own work
//This file (The image) is licensed under the Creative Commons Attribution-Share Alike 4.0 International license.
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

/*
        <div class="introGrid">
            <div class="introCard">
                <h3>Who Are We?</h3>
                <p>Embodying the bustling and gaudy energy in SF, The Lotus Lab, offers a variety of sophisticated and artfully curated vegetarian dishes, services, and dining experiences. The Asian and American fusion of our cuisine brings a familiar yet interesting take on the city culture and brings comfort food to residents of the bay to a new level while maintaining a vegetarian lifestyle.</p>
            </div>
            <div class="introCard">
                <h3>Our Accomplishments</h3>
                <p>Best known for its win of the Michelin Star 2 years in a row, we at The Lotus Lab count the most pride in our ability to deliver farm-to-table in an empathic city as well as clean food processes to ensure customer satisfaction and safety.</p>
            </div>
            <div class="introCard">
                <h3>Where Are We?</h3>
                <p> Home to nearly 800,000, the Golden City has been built with a fusion of American values and Asian style as well as a mass of versatile elements.  Within the heart of downtown San Francisco lies a perfect balance of diversity and inclusivity that “The City” has flourished and thrived under. Tourists and natives alike would expect nothing less when it comes to the culinary scene and arts. </p>
            </div>
        </div>
*/
