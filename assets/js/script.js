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
    console.log('blockTimeDate = ' + blockTimeDate);
    console.log('currentdatetime = ' + currentDateTime);
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
        textEl.addClass('bg-secondary');
    }

    var btnEl = $('<button>');
    btnEl.addClass('input-group-append btn saveBtn border-left-0');
    btnEl.attr('id', block.timeBlock);
    btnEl.attr('type', 'button');
    btnEl.html('💾');

    timeBlockEl.append(blockLabel);
    timeBlockEl.append(textEl);
    timeBlockEl.append(btnEl);
    $('.container').append(timeBlockEl);

}


// when a save button is pressed, the text for that box is updated in the array of timeBlock objects
// when the page is refreshed, I want whatever text is inside the text box to still be saved

// addTimeBlocktoPage(timeBlocks[0]);
// addTimeBlocktoPage(timeBlocks[0]);
getLocalStorage();
for(var i = 0; i < timeBlocks.length; i++) {
    addTimeBlocktoPage(timeBlocks[i]);
}



// When the floppy disk icon is clicked, then the text inside is saved nd synced with local storage
$('.saveBtn').click( function() {
    var id = $(this).attr('id');
    console.log(this);
    console.log(id);
    for (let index = 0; index < timeBlocks.length; index++) {
        if(timeBlocks[index].timeBlock === id) {
            timeBlocks[index].activities = $('#' + id).prev().val();
        }
    }
    console.log(timeBlocks);
    setLocalStorage();
    
});

// function to sync timeblocks with localstorage
function setLocalStorage() {
    localStorage.setItem('schedule', JSON.stringify(timeBlocks));
}

function getLocalStorage() {
    // if data exists in local storage the set timeblocks = to local storage
    // else set whatever is in timeblocks and save to local storage
    if (localStorage.getItem('schedule') !== null) {
        timeBlocks = JSON.parse(localStorage.getItem('schedule'));
    }
    else {
        localStorage.setItem('schedule', JSON.parse(timeBlocks));
    }
}


var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, MMMM Do'));

console.log(moment().format('h'));
sometime = moment('12am', 'ha')['_i'];
console.log(sometime);
console.log(moment('9am', 'ha'));

console.log(moment('12am', 'ha').isBefore('1am', 'ha'))
var format = "dddd, MMMM Do YYYY, ha"
datetime = moment().format("dddd, MMMM Do YYYY, ha");
console.log(datetime);
// Thursday, October 6th 2022, 7pm
console.log(moment('Thursday, October 6th 2022, 12pm', format).isBefore(moment('Thursday, October 6th 2022, 12pm', format)));
if(moment('Thursday, October 6th 2022, 7pm', format).isSame(moment('Thursday, October 6th 2022, 7pm', format), 'hour')) {
    console.log('true');
}