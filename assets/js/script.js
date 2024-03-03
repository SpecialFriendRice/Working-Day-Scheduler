//jQuery wrapper from module 6
$(document).ready(function() {
   
//VARIABLES

var containerEl = $('.container');
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var tbodyEl = $('.tBody'); 

//CURRENT DATE TO DISPLAY IN HEADER

var today = dayjs();
currentDayEl.text(today.format('D MMM YYYY'));

//CURRENT HOUR (0-24) TO COMPARE WITH TIME-BLOCK HARDCODED VALUE
var currentHr = dayjs().hour();

//To get the hour value already hard coded into each html row to compare with actual time:
//first get all elements with class = hour 
//var hourEl = document.querySelectorAll('.hour');
//get the hour (0-24) by trimming the hardcoded hour text inside
//var hourValue = hourEl.textContent.trim();

//OR 
//Use jQuery $.each() to iterate through the jQuery object?
//For each element with a class of hour, get the hourValue from the text hardcoded within it
//NB why is there an error for the dot to signify class in $(.'hour') below?
//$(.'hour').each(function() {
$('hour').each(function() {
    var hourValue = parseInt($(this).text().trim().split(':')[0]);
// the code below picks up the textarea which is the sibling to the element which holds the hour value; the textarea is what we want to change colour
    var textarea = $(this).siblings('textarea'); 
//is addClass the correct method?
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

//Save input from textarea to local storage on clicking of the save button
// WHY WAS EVENT LISTENER NOT WORKING? "saveBtnEl.addEventListener is not a function" - because saveBtnEl is a jQuery object and addEventListener works on DOM objects
saveBtnEl.on('click', function(event) {
    event.preventDefault(); 
    //alert("save button works");
    //localStorage.setItem("Your Local Storage", "Is Working");
    
    //Harness the fact that the user input is to the textarea that is a sibling of the save button.
    //the below is just bringing back eventEl as undefined; 
    //DEBUG **this is because currently $(this).siblings('textarea').val() gives an empty object (array?)**
    var eventEl = $(this).siblings('textarea').val();
    //console.log($(this).siblings('textarea'));
    //console.log($(this).siblings('textarea').length); 

    //Will val() work for this string of data? Does it need to be trimmed?

    //To distinguish each textarea input so they don't write over each other in local storage, need to set each a unique key - in this case the unique id of the textarea element. Was there a way to harness the hourValue coded above and use that as the key that would have made this simpler?
    var key = $(this).siblings('textarea').attr('id');
    localStorage.setItem(key, eventEl);

});

//clearing out local storage/overwriting renderLastRegistered() etc?
//If time, put character limit on event text and/or word wrap?

});

