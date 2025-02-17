const resName = getElement("resNameInput");
const numPeople = getElement("numPeopleInput");
const numPeopleLabel = getElement("numPeopleLabel");
const time = getElement("timeInput");
const date = getElement("dateInput");
const submitButton = getElement("submitButton");
const dialog = getElement("confirmation");
const confirmationText = getElement("confirmationText");
const bookForm = getElement("bookForm");
const yesButton = getElement("yes");
const noButton = getElement("no");
const finishStructure = getElement("finishStructure");
const finishHeading = getElement("finishHeading");
const finishText = getElement("finishText");
var confirmText = '';

numPeople.addEventListener("input", labeler);
submitButton.addEventListener("click", Function);
noButton.addEventListener("click", redo);
yesButton.addEventListener("click", confirmFinish);

labeler();

function labeler()
{
    numPeopleLabel.innerText = `${numPeople.value} people`;
}

function Function(e)
{
    e.preventDefault();
    var today = new Date();
    var currMonth = today.getMonth();
    var dateData = new Date(date.value);
    var monthIndex = dateData.getMonth();
    var dateNum = dateData.getDate();
    var weekdayIndex = dateData.getDay() + 1;
    if (weekdayIndex == 7)
    {
        weekdayIndex = 0;
    }
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var hours = parseInt(time.value.split(":")[0]);
    if (hours > 8 && hours < 20 && weekdayIndex != 0 && weekdayIndex != 6 && resName.value != "" && Math.abs(currMonth - monthIndex) >= 2)
    {
        confirmText = `Reservation Number: ${getRandNumber()}\nReservation Name: ${resName.value}\n${weekdays[weekdayIndex]} ${months[monthIndex]}, ${dateNum} at ${time.value}\n${numPeople.value} people`;
        confirmOpen();
    }
} // Sorry for the name, Thomas (Luke) and I were feeling silly => This function just handles submitting

function confirmOpen()
{
    confirmationText.innerText = confirmText;
    dialog.showModal();
}

function confirmFinish()
{
    bookForm.classList.toggle("submitted");
    finishText.innerText = confirmText;
    finishStructure.classList.add("opened");
    dialog.close();
}

function redo()
{
    dialog.close();
}
function getElement(id)
{
    return document.getElementById(id);
}

function getRandNumber()
{
    var randNum = 0;
    for (let i = 0; i < Math.round(Math.random()) + 1; i++)
    {
        randNum += Math.round(Math.random()) + 1;
    }
    return randNum;
}
