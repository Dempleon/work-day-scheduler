var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, MMMM Do'));

var timeBlocks = [
    {
        timeBlock: '9am',
        activities: '9',
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

function addTimeBlocktoPage() {
    var inputGroupDiv = $('<div>');
    inputGroupDiv.addClass('input-group');

    var inputGroupPrependDiv = $('<div>');
    inputGroupPrependDiv.addClass('input-group-prepend');
    
    var inputGroupText = $('<div>');
    inputGroupText.addClass('input-group-text');

    var textArea = $('<textarea>');
    textArea.addClass('form-control');
    textArea.attr('aria-label', 'With textarea');

    inputGroupPrependDiv.append(inputGroupText);
    inputGroupDiv.append(inputGroupPrependDiv);
    inputGroupDiv.append(textArea);
    $('.container').append(inputGroupDiv);
}

