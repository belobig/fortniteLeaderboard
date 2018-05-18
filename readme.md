### Heroku ###
https://pacific-caverns-48876.herokuapp.com/


### Description ###
interesting than technical.
- This is an app to view your Fortnite scores and compare them to your friends or favorite streamer.


### Motivation ###
- There isn’t really an easy way to lookup your friends and favorite streamers Fortnite data, even inside Fortnites game menu. People can be all talk about how good they are but the data doesn’t lie. Our motivation in this app is to give users a way to see and compare scores to other Fortnite players.
- We wanted something fun, that would allow us to play games for homework, and something we could enjoy ourselves, and be proud of.
- Planning and scope was a problem the last time. We wanted to work on something that was fun; with the possibility of recreational gaming, and get a feel for the technologies availible to make it all work.


### Results ###
- The main benefit of this app is that it doesn’t require an epic account to compare Fortnite scores, you can compare your own accounts stats to anyones epic account. People who don’t have an epic ID or have never played Fortnite can check up on their favorite streamers scores and compare them to other users stats.


### Team Efforts ###
- We did a lot of para-programming on the core structure. It gave us the opportunity to pass in ideas along the way and work more efficiently off one computer. After the base app was working we divided up tasks for front end, adapting new technology, and getting the database working to store user data.
- We worked to our strengths, and collaborated on our weak points. We communicated frequently via Slack and text to make sure we were all aware of when pushes were being made, and carefully reviewed merges to make sure not to undo each other's work.
- We made the application with one goal being that we each would understand; for the most part, how each part works in itself and together as a whole.


### Individual Responsibilities ###
- Chris: Early on I worked on linking the form to display epic information on the application based off of the epic username. Later on I built a good portion of the database structure so users could save page data to the SQL server.
- Kelly: I helped lay the groundwork, creating the initial file structure and the GitHub Repo. I did some research to discover what stats we could pull, and how we wanted them to display on the page (percentile bars on some of the stats). I recorded video of gameplay to make the page feel fun and gamy. I got the testing working, and integrated Chart.js to show a simple graph of user data. I also assisted in troubleshooting API and HTML routes.
- Ben: I spent the majority of my time working with the layout, adding in materialize and a relitively successful implementation of parallax. I also integrated any of the bits of code Chris and Kelly did into the sites front-end.


### Challenges ###
- We were having issues getting data to display from the API in the beginning. We all worked as a team to get that data coming in, but I added the ability to pass in specific data based on epic ID’s and displaying it on the page.



### Improvements ###
- We wanted to add authentication for the page itself so users could login in and view their own saved player information. Currently the page works for anyone who visits it, so whatever data was submitted last will be shown.