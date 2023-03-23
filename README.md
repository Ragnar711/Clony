## Name
Clony

## Description
One place for trcking your movies, tv shows, and animes

## Installation
Server side:  
1- npm init -> npm install  
2- create a database using your favorite service provider (must be supported by prisma)  
3- specify the db url in the env file (refer to prisma docs)  
4- in the terminal: npx prisma migrate dev (to sync your db with the necessary models)  
5- insall nodemon globally with npm install -g nodemon then run it in the terminal by typing nodemon  
6- the server should be running now, if not follow the error and figure it out  
Client side:  
1- install pnpm globally -> then run pnpm init -> pnpm install  
2- in the terminal: pnpm run start  
3- you should be set to go  

## Usage  
1/ Login and signup:  
in the first page you can login if you have an account or signup if you don't (passwords are hashed for safety reasons)  
errors will pop up if the username or password are incorrect  
if you're not logged in and you don't have a session storage and you try to access the home page or any other by directly typing the url you will be logged out immediately  
![login](https://user-images.githubusercontent.com/72103514/227166567-f243f3f1-9bea-4c14-9e49-f55903ab9aeb.PNG)
![signup](https://user-images.githubusercontent.com/72103514/227166601-e7c0c4d9-67a8-45ed-98b6-9f26f11dcd90.PNG)
![error](https://user-images.githubusercontent.com/72103514/227166647-bc192f1a-3ebc-465a-9e22-0c028750ed6c.PNG)

2/ Home  
in this page you can add new media  
name and year are both required and you can't enter an unreasonable year like 2024 if we're in 2023 (I'm sorry if you came from the future and want to add a movie that you watched 100 years from now)  
media type is required and must be one of these 3 (mind the casing): Movie, TV Show, Anime  
you can give a rating, add a director if you want, add up to 4 actors and 2 genres  
an error will pop up if something is wrong  
3/ Media  
in this page you can see the different medias you watched grouped by type and sorted from newest to oldest  
you can also delete media  
4/ Actors  
here you can see your favorite actors and how many medias of theirs you watched  
they're organized by number of media from most to least  
in the search field you can look for any actor you want  
5/ Stats  
here you can see how many movies, tv shows, and animes you watched overall, the number of movies you watched this year, your favorite genres in a pie chart, and a table with your favorite directors  
6/ 404 page  
if you type an invalid url you will be encountered with a 404 page where you can click on a button to be sent back to home page  
7/ finally and of course you can logout by clicking logout in the navbar  
  
PS: it's not responsive  

## Support
if you need help email me: azizbechaib711@gmail.com

## Project status
Project is still progressing and more functionalities will be added, stay tuned!
