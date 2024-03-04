//jQuery wrapper from module 6
$(document).ready(function() {
   
//VARIABLES
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');

//CURRENT DATE TO DISPLAY IN HEADER
var today = dayjs();
currentDayEl.text(today.format('D MMM YYYY'));

//CURRENT HOUR (0-24) TO COMPARE WITH TIME-BLOCK HARDCODED VALUE
var currentHr = dayjs().hour();

//To get the hour value already hardcoded into each table row in order to compare with actual time:
//Use jQuery $.each() to iterate through the jQuery object; for each element with a class of hour, get the hourValue by using the hardcoded text and trim/split/parseInt it to match the format of currentHr
$('.hour').each(function() {
    var hourValue = parseInt($(this).text().trim().split(':')[0]);

//Traverse the DOM (couldn't find a method using sibling that worked) to pick the textarea element for that row; change background colour of textarea using the starter CSS classes plus addClass
    var textarea = $(this).parent().find('textarea');
    
    if (hourValue < currentHr) {
        textarea.addClass('past');
    } else if (hourValue === currentHr) {
        textarea.addClass('present');
    } else if (hourValue > currentHr) {
     textarea.addClass('future');
       } 
      
});

//Save input from textarea to local storage on clicking of the save button, which now becomes $(this):
saveBtnEl.on('click', function(event) {
    event.preventDefault(); 

    //User input is to the textarea, which is a relative of the save button's parent element. Not sure why this needs .prev() while the hour method doesn't, but the input is declared as the below: 
    var textareaInput = $(this).parent().prev().find('textarea').val();

    //To distinguish each textarea input and prevent them write over each other in local storage, need to set each a unique key - in this case the unique id of the textarea element. Was there a way to harness the hourValue coded above and use that as the key that would have made this simpler?
    var key = $(this).parent().prev().find('textarea').attr('id');
    localStorage.setItem(key, textareaInput);
});

//Return saved text from local storage when page is refreshed:
$('textarea').each(function() {
    var key = $(this).attr('id');
     var savedText = localStorage.getItem(key);
    if (savedText) {
        $(this).val(savedText);
    }
});

});

