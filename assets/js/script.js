//jQuery wrapper from module 6
$(document).ready(function() {
   
//VARIABLES

var containerEl = $('.container'); //do I need this?
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var tbodyEl = $('.tBody'); //do I need this?

//CURRENT DATE TO DISPLAY IN HEADER

var today = dayjs();
currentDayEl.text(today.format('D MMM YYYY'));

//CURRENT HOUR (0-24) TO COMPARE WITH TIME-BLOCK HARDCODED VALUE
var currentHr = dayjs().hour();

//To get the hour value already hard coded into each html row to compare with actual time:
//first get all elements with class = hour 
//in non-jQuery:
//var hourEl = document.querySelectorAll('.hour');
//get the hour (0-24) by trimming the hardcoded hour text inside
//var hourValue = hourEl.textContent.trim();

//OR 
//Use jQuery $.each() to iterate through the jQuery object?
//For each element with a class of hour, get the hourValue from the text hardcoded within it
//NB why was there an error for the dot to signify class in $(.'hour') below?
//$(.'hour').each(function() {
$('.hour').each(function() {
    var hourValue = parseInt($(this).text().trim().split(':')[0]);

//The DOM traversal that worked with the textareaValue works here too, to pick the right element (doesn't seem to work with sibling term in relation to the hour element) and get it to change background colour by using starter CSS and addClass: 

    var textarea = $(this).parent().prev().find('textarea');
    //console.log(textarea);

//is addClass the correct method?
    if (hourValue < currentHr) {
        textarea.addClass('past');
    } else if (hourValue === currentHr) {
        textarea.addClass('present');
    } else if (hourValue > currentHr) {
     textarea.addClass('future');
       } else {
        //the present class was originally in as the else but neither works
       }

       //TESTS
       //Both currentHr and hourValue are number type
       //console.log("Current hour is " + currentHr);
       //console.log(hourValue);
      
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
saveBtnEl.on('click', function(event) {
    event.preventDefault(); 
    //alert("save button works");
    //localStorage.setItem("Your Local Storage", "Is Working");
    
    //Harness the fact that the user input is to the textarea that is a relation of the save button's parent element.
    const textareaValue = $(this).parent().prev().find('textarea').val();
    //console.log(textareaValue);

    //BELOW IS WAS WHAT WASN'T WORKING!
    //var textareaValue = $(this).siblings('textarea').val();
    //console.log($(this).siblings('textarea'));
    //console.log($(this).siblings('textarea').length); 
    //console.log($(this)); returns the button element as it should


    //DEBUG local storage is now working, but text is not persisting on refresh page

    //To distinguish each textarea input so they don't write over each other in local storage, need to set each a unique key - in this case the unique id of the textarea element. Was there a way to harness the hourValue coded above and use that as the key that would have made this simpler?
    var key = $(this).parent().prev().find('textarea').attr('id');
    localStorage.setItem(key, textareaValue);

});

//clearing out local storage/overwriting renderLastRegistered() etc?
//If time, put character limit on event text and/or word wrap?
//Trim textareaValue before saving to local storage?

});

