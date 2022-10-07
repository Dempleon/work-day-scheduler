var timeBlocks = [
    {
        timeBlock: '9am',
        activities: '',
    },
    {
        timeBlock: '10am',
        activities: '',
    },
    {
        timeBlock: '11am',
        activities: '',
    },
    {
        timeBlock: '12pm',
        activities: '',
    },
    {
        timeBlock: '1pm',
        activities: '',
    },
    {
        timeBlock: '2pm',
        activities: '',
    },
    {
        timeBlock: '3pm',
        activities: '',
    },
    {
        timeBlock: '4pm',
        activities: '',
    },
    {
        timeBlock: '5pm',
        activities: '',
    }
]

// function to dynamically create html bootstrap elements from an object
// the background of the text boxes change with the times of day
function addTimeBlocktoPage(block) {
    var timeBlockEl = $('<div>');
    timeBlockEl.addClass('input-group');

    var blockLabel = $('<div>');
    blockLabel.addClass('input-group-text input-group-prepend');
    // add corresponding object timeblock id to the div
    // blockLabel.attr('id', block.timeBlock);
    blockLabel.html(block.timeBlock);

    var textEl = $('<textarea>');
    textEl.addClass('form-control border-right-0 text-white');
    textEl.val(block.activities);
    // change the color of the activities depending on the time of the day
    var format = "dddd, MMMM Do YYYY, ha"
    var currentDateTime = moment().format(format);
    // var currentDate = moment().format('dddd, MMMM Do YYYY, ');
    var blockTimeDate = moment().format('dddd, MMMM Do YYYY, ') + block.timeBlock;

    // if the timeblock is before the current time
    // apply a gray background to the textbox
    if(moment(blockTimeDate, format).isBefore(moment(currentDateTime, format))) {
        textEl.addClass('bg-secondary');
    }
    // if the timeblock is after the current time
    // apply a green background to the textbox
    if(moment(blockTimeDate, format).isAfter(moment(currentDateTime, format))) {
        textEl.addClass('bg-success');
    }
    // if the timeblock is the same hour
    // apply a red background to the textbox
    if(moment(blockTimeDate, format).isSame(moment(currentDateTime, format), 'hour')) {
        console.log('true');
        textEl.addClass('bg-danger');
    }

    var btnEl = $('<button>');
    btnEl.addClass('input-group-append btn saveBtn border-left-0');
    btnEl.attr('id', block.timeBlock);
    btnEl.attr('type', 'button');
    btnEl.html('💾');

    timeBlockEl.append(blockLabel);
    timeBlockEl.append(textEl);
    timeBlockEl.append(btnEl);
    $('.main').append(timeBlockEl);
}

// function to sync timeblocks with localstorage
function setLocalStorage() {
    localStorage.setItem('schedule', JSON.stringify(timeBlocks));
}
// function to get saved timeblocks data from localstorage
function getLocalStorage() {
    // if data exists in local storage the set timeblocks = to local storage
    // else set whatever is in timeblocks and save to local storage
    if (localStorage.getItem('schedule') !== null) {
        timeBlocks = JSON.parse(localStorage.getItem('schedule'));
    }
    else {
        localStorage.setItem('schedule', JSON.stringify(timeBlocks));
    }
}

// pull from local storage and dynamically build the timeblocks
getLocalStorage();
function displayBlocks() {
    $('.main').empty();
    for(var i = 0; i < timeBlocks.length; i++) {
        addTimeBlocktoPage(timeBlocks[i]);
    }
}
displayBlocks();


// When the floppy disk icon is clicked, then the text inside is saved and synced with local storage
$('.saveBtn').click( function() {
    var id = $(this).attr('id');
    for (let index = 0; index < timeBlocks.length; index++) {
        if(timeBlocks[index].timeBlock === id) {
            timeBlocks[index].activities = $('#' + id).prev().val();
        }
    }
    setLocalStorage();
});


var currentDateTime = $('#currentDay');
currentDateTime.text(moment().format('dddd, MMMM Do, ha'));

// Every hour, reset the page so that the color in the textboxes change
var minstoHour = 60 - moment().format('m');
var mstoHour = minstoHour * 60 * 1000;
console.log(mstoHour);
function reFreshTimeBlocks () {
    var minstoHour = 60 - moment().format('m');
    var mstoHour = minstoHour * 60 * 1000;
    displayBlocks();
    setTimeout(reFreshTimeBlocks, mstoHour);
}
setTimeout(reFreshTimeBlocks, mstoHour);
