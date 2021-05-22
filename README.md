# 11 Note Taker app with Express

## Assignemnt

For the eleventh homework assignment in week eleven of UNH Full-Stack Coding Bootcamp I was to modify starter code to create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end had already been created. I was to build the back end, connect the two, and then deploy the entire application to Heroku.


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Description
```
The goal of this project was to create a Node.js command-line application that takes in information about employees on an engineering team through user prompts, then generates an HTML webpage that displays the information for each employee. I also handled a  DELETE requests, by adding the DELETE route to the application.
```


## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


## Installation
```

You will need to clone the respositry from Github to your local machine then open up your preferred terminal and navigate to the directory where you cloned the github repository.

You will need ro run in the terminal:

npm start

npm install express

npm install uuid

to see the app working open server.js in your integrated terminal and run node server.js


```


## Built with


* HTML
* CSS
* BOOTSRAP
* JavaScript
* Node.js

## Dependancis

* Express
* UUID



## Deployment Links

* [GitHub Repository](https://github.com/efagioli01/team-profile-generator)

* HEROKU https://damp-fjord-64572.herokuapp.com/notes


## Screenshot

![screenshot](./images/noteone.PNG)
![screenshot](./images/note2.PNG)








 ## MIT License



Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




Copyright (c) 2021 Erica F