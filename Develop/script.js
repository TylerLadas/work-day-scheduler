// display current date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// save button clicked
$('.saveBtn').click(function() {
    // get values
    let taskTime = $(this).siblings().attr('id');
    let taskText = $(this).siblings('textarea').val();

    // save to local storage
    localStorage.setItem(taskTime, taskText)
})

// today's time variable

let currentTime = moment().hour();


