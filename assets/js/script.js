var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, MMMM Do'));

var timeBlocks = [
    {
        timeBlock: '9am',
        activities: 'this is the first block do this and that',
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
function addTimeBlocktoPage(block) {
    var timeBlockEl = $('<div>');
    timeBlockEl.addClass('input-group');

    var blockLabel = $('<div>');
    blockLabel.addClass('input-group-text input-group-prepend');
    // add corresponding object timeblock id to the div
    // blockLabel.attr('id', block.timeBlock);
    blockLabel.html(block.timeBlock);

    var textEl = $('<textarea>');
    textEl.addClass('form-control border-right-0');
    textEl.val(block.activities);

    var btnEl = $('<button>');
    btnEl.addClass('input-group-append btn saveBtn border-left-0 align-middle');
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



// I want to be able to save what is typed in the text box and put it in local storage
// for now i just want to save what is in the input box when i click on the whole box
// save the text inside when the leftbox is clicked
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

