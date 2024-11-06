# Page-Timings
CSS Framework- Pure

## User Story

AS A stage manager
I WANT to be able to track the timing for each page that is being read for the script. 
SO THAT I have accurate reference information about the show to improve efficiency.

## Acceptance Criteria

GIVEN A blank table there is a timer that is set to zero and the corresponding page number elment set to zero.
WHEN I load the page as a USER 
THEN I am presented with a modal that asks for the show that is being worked on.
WHEN I submit the name of the show.
THEN The table is populated if that show exists in local Storage. If no show exists,  a new variable is saved to local Storage with the show name as the key.
WHEN I click the "Start Timer" button.
THEN I am presented with a stopwatch that starts.
GIVEN A running stopwatch
WHEN I press the space bar.
THEN A new row is logged into the table specifying page number, time stamp and page duration. The table is then saved to show key in local storage. The page number is incremented at +1, and the timer continues to run. 
WHEN The page number is incremented
THEN There is an animation of a page in a book turning over. 
WHEN I click the stop timer button
THEN The stopwatch stops, the final row is added to the table. 
WHEN I click the Export button
THEN The table data is downloaded to your local machine. 


