//Use event.preventDefault() inside functions and standard js/jQuery wrapper learnt last week?
//starter code has included links to Bootstrap, GoogleAPIs and FontAwesome (presumably for delete button icon) and scripts for jQuery and DayJS
//<p> div already provided in header for inserting today's date. I've currently hardcoded text "Today is" into html but should I dynamically do this as well as DayJS ref?
//"timeblocks" = grid for working day (are we allowed to use a Bootstrap TABLE template?) - CSS has the styles for these elements already defined!
//is there any point in creating divs with hours of day dynamically? Surely set times e.g. 9am to 6pm is best? Should I create a for loop to create a row for each hour between start of day and end of day or can I hardcode this?
//timeblocks (hourblocks?) need to have the facility to change colour depending on actual time of day. Is this a widget or a  class to be compared with current time? ONLY EVENTINPUT COLUMN NEEDS TO CHANGE COLOUR ACCORDING TO TIME OF DAY, SO DOES THIS HAVE TO HAVE A HIDDEN TIME ATTRIBUTE? 

// is it literally a grid rather than a table with one column displaying set hour, one column for the diary events and one column for save? Will this give the visual or actual continuity needed for the changing of times or does that even matter?
//timeblocks need to be able to hold input with direct entry (or form/modal?)
//timeblocks need to have a save button that will save input in local storage - already defined in CSS
//is deleting/drag and drop(as per jQuery UI drag and drop widget?) needed or allowed? I think for now just overwrite and no delete/drag and drop as that would reorder time!
//.saveBtn class is already formatted with hover changing cursor to finger
//If time, put character limit on event column and/or word wrap?







//VARIABLES

var containerEl = $('.container');
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var tbodyEl = $('.tBody'); 

//CURRENT DATE TO DISPLAY IN HEADER

var today = dayjs();
currentDayEl.text(today.format("D MMM YYYY"));



//WHY IS EVENT LISTENER NOT WORKING? "saveBtnEl.addEventListener is not a function"
// saveBtnEl.addEventListener("click", function(event) {
//     alert("saveBtn works");
// });



// README says "dynamically updated HTML and CSS powered by jQuery."

// declare an array with literal notation. 
//Note it is currently strings - should I change to integers etc? Or shall I destringify later? NOTE THAT THE TIME COLUMN IS NOT THE ONE THAT CHANGES COLOUR, ITS THE EVENT COLUMN. SO MAYBE THIS WOULD BE OK WITH A STRING (THEN COMPARE THE UNSTRINGIFIED VERSION WITH CURRENT TIME IN THE EVENT COLUMN?)
var workdayHrs = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

//creat function to add rows to Bootstrap table body (= tbody; have assigned it class = tBody and var = tBodyEl)

function createRows(workdayHrs) {
    for (var i = 0; i < workdayHrs.length; i++) {
        var rowEl = document.createElement('tr');
        //needs three cells (<td> elements in Bootstrap lingo) per row (<tr> in Bootstrap) so another for loop needed inside:
            for (var j = 0; j < 3; j++) {
                var cell = document.createElement("td"); //where do I .textContent? Do I need to add to create certain text elements???
                rowEl.appendChild(cell);
            }
        //append rows to the table
        tbodyEl.appendChild(rowEl)
    }
}



//save to local storage function needed NEED TO NAME INPUT FOR EVENT USER INPUT - BELOW I HAVE ASSIGNED IT THE ID eventInput
// saveBtnEl.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     var eventEl = document.querySelector("#eventInput").value;
  
//       localStorage.setItem("eventEl", eventEl);
      
//       //HAVEN'T DEAL WITH CLEARING OUT INPUT ETC WITH METHODS LIKE THE BELOW
//       renderLastRegistered();
//     }

//FINISH Colour change function depending on current time; need to name input fields
// function colorChange () {
//     if ()
// }

//HH is 24hr clock to two digits
var currentHr = dayjs().format("HH")

//or does DayJS have past/future widget? Yes, it has .isAfter and .isBefore, but for a given parameter. Will it work using current date and time as parameter? Would you still need to rely on the round to 24 hour clock to be able to have a "present" time?