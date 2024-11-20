# Page-Timings
CSS Framework- Bootstrap
---
## User Story
* AS A stage manager
I WANT to be able to track the timing for each page that is being read for the script.
SO THAT I have accurate reference information about the show to improve efficiency and safety.
---
## Acceptance Criteria
* GIVEN A blank landing page, there is an area to input the date and title of the show being worked on.
* WHEN I load the page as a USER I am able to input the date and title of the show to populate a new show button below.
* THEN I am presented with a modal that asks for confirmation of the show that is being worked on when the button is clicked.
* WHEN I submit the name of the show.
* THEN I am redirected to the index.html page with a new page that includes a data-table, stopwatch and corresponding page number. Both stopwatch and page number are set to zero.
* WHEN I click the "Start Timer" button.
* THEN I am presented with a stopwatch that starts.
* GIVEN A running stopwatch
* WHEN I press the space bar.
* THEN A new row is logged into the table specifying page number, and time stamp. The table is then saved to show the key in local storage. The page number is incremented at +1, and the timer continues to run.
* WHEN I click the "Stop Timer" button.
* THEN the user will see the stopwatch stop and that is the end of recording page-timing.
* WHEN The table is populated it will show existing show data in local Storage. If no show exists,  a new variable is saved to local Storage with the show name as the key.