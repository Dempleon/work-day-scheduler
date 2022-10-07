# Work Day Scheduler
This application is a simple work day scheduler which allows users to set activities as text inputs for working hours (9am-5pm).

<hr>

## Project Description
To use this application, users can enter their activities as text into the textboxes. To save what is inside the text boxes, press the floppy icon to the right. The users' inputed data is then saved to their browser local storage.
Depending on the current time of day, the text boxes will be colored gray to indicate that the timeblock has passed, red to indicate the current hour, or green to indicate that the timeblock is a future hour. Every hour, the page refreshes itself so that the colors of the text boxes will change.

![image](./assets/images/scheduler%20demo.gif) 
![image](./assets/images/schedule2.gif) 


<hr>

## Deployment
This webpage is deployed through github pages:
https://dempleon.github.io/work-day-scheduler/



<hr>

## Dev Notes
This application uses bootstrap elements, jquery to dynamically create elements, and moment.js to handle time events.
When the page first loads, it calculates the time remaining until the next hour so that it knows when to refresh the page. The timeblock elements are dynamically created by javascript from an array of objects. When the page loads/refreshes, all timeblocks inside the container class are removed and dynamically created and appended.
