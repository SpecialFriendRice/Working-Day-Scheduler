//jQuery wrapper learnt last week
$(document).ready(function() {
   
//VARIABLES

var containerEl = $('.container');
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var tbodyEl = $('.tBody'); 

//CURRENT DATE TO DISPLAY IN HEADER

var today = dayjs();
currentDayEl.text(today.format('D MMM YYYY'));

//CURRENT HOUR (0-24) TO COMPARE WITH TIME-BLOCK
var currentHr = dayjs().hour();


//To get the hour value hard coded into each html row to compare with actual time:
//first get all cells/fields with class = hour
//var hourFields = document.querySelectorAll('.hour');
//get the hour (0-24) by trimming the hardcoded hour text inside
//var hourValue = hourFields.textContent.trim();

//OR use jQuery $.each() to iterate through the jQuery object?
//For each element with a class of hour, get the hourValue from the text hardcoded within it
$(.'hour').each(function() {
    var hourValue = parseInt($(this).text().trim().split(':')[0]);
// the below picks up the textarea that is the sibling to the element which holds the hour value. Note that textarea is an id as well as a tag, but not a class - does it need a hashtag?
    var textarea = $(this).siblings('textarea'); 
//is addClass the correct method? How will it update?
    if (hourValue < currentHr) {
        textarea.addClass('past');
       } else if (hourValue > currentHr) {
        textarea.addClass('future');
       } else {
        textarea.addClass('present');
       }
});

//or do I need a for loop to go through 09:00 to end of day? Something like
// for (let i = 9; i < 18; i++) {
//    if (hourValue < currentHr) {
//     textarea.addClass('past');
//    } else if (hourValue > currentHr) {
//     textarea.addClass('future');
//    } else {
//     textarea.addClass('present');
//    }
// }


//FINISH Colour change function depending on current time; need to name input fields
// function colorChange () {
//     if (ALONG THE LINES OF CURRENTHR>HOUR) {
//         $('#textarea'). //change class from past to present etc (ADD/AMEND CSS class provided in starter code)
// } else if () {
    
// }
// }


// WHY WAS EVENT LISTENER NOT WORKING? "saveBtnEl.addEventListener is not a function" - because saveBtnEl is a jQuery object and addEventListener works on DOM objects
saveBtnEl.on('click', function(event) {
    //do i still need a preventDefault?
    event.preventDefault(); 
    //alert("save button works");

    //STILL TO DO - SAVE INPUT IN TEXTAREA TO LOCAL STORAGE WHEN SAVE BUTTON IS CLICKED
    //NOTE THAT AS ALL ROWS (HOURS) HAVE THE SAME ATTRIBUTE FOR THIS SECTION: ID = textarea, need to focus on the user input to the textarea in the same row i.e. a sibling of the save button that was clicked
    var eventEl = $(this).siblings('textarea').value;
    localStorage.setItem('eventEl', eventEl);

});






//save to local storage function needed NEED TO NAME INPUT FOR EVENT USER INPUT - BELOW I HAVE ASSIGNED IT THE ID eventInput

// saveBtnEl.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     var eventEl = document.querySelector("#eventInput").value;
  
//       localStorage.setItem("eventEl", eventEl);
      
//       //HAVEN'T DEALT WITH CLEARING OUT INPUT ETC WITH METHODS LIKE THE BELOW
//       renderLastRegistered();
//     }


});


//.saveBtn class is already formatted with hover changing cursor to finger
//If time, put character limit on event text and/or word wrap?