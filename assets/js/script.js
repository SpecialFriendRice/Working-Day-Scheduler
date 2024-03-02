//Use event.preventDefault() inside functions and standard js/jQuery wrapper learnt last week?
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

//CURRENT HOUR TO COMPARE WITH TIMEBLOCK - class past/present/future is now attribute of timeblock text area, will this have the 
var currentHr = dayjs().hour()

//FINISH Colour change function depending on current time; need to name input fields
// function colorChange () {
//     if (ALONG THE LINES OF CURRENTHOUR>HOUR) {
//         $('#textarea'). //change class from past to present etc
// } else if () {
    
// }
// }


// WHY IS EVENT LISTENER NOT WORKING? "saveBtnEl.addEventListener is not a function" - because saveBtnEl is a jQuery object and addEventListener works on DOM objects
saveBtnEl.on("click", function(event) {
    alert("save button works");
    //do i need a preventDefault?
    event.preventDefault(); 
    //STILL TO DO - SAVE INPUT IN TEXTAREA TO LOCAL STORAGE WHEN SAVE BUTTON IS CLICKED
    //NOTE THAT AS ALL ROWS (HOURS) HAVE THE SAME ATTRIBUTE FOR THIS SECTION: ID = textarea, need to focus on the user input to the textarea in the same row i.e. a sibling of the save button that was clicked
    var eventEl = $(this).siblings("textarea").value;
    localStorage.setItem("eventEl", eventEl);

});






//save to local storage function needed NEED TO NAME INPUT FOR EVENT USER INPUT - BELOW I HAVE ASSIGNED IT THE ID eventInput

// saveBtnEl.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     var eventEl = document.querySelector("#eventInput").value;
  
//       localStorage.setItem("eventEl", eventEl);
      
//       //HAVEN'T DEALT WITH CLEARING OUT INPUT ETC WITH METHODS LIKE THE BELOW
//       renderLastRegistered();
//     }



