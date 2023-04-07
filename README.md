## Name
Clony

## Description
One place for trcking your movies, tv shows, and animes

## Installation
Server side:  
1- `npm`
`init npm install`  
2- Create a database using your favorite service provider (must be supported by prisma)  
3- Specify the db url in the env file (refer to prisma docs)  
4- In the terminal: `npx prisma migrate dev` (to sync your db with the necessary models)  
5- Insall nodemon globally with `npm install -g nodemon` then run it in the terminal by typing `nodemon`    
6- The server should be running now, if not follow the error and figure it out  
Client side:  
1- Install pnpm globally -> then run `pnpm init` -> `pnpm install`    
2- In the terminal: `pnpm run start`  
3- You should be set to go  

## Usage  
1/ Login and signup:  
In the first page you can login if you have an account or signup if you don't (passwords are hashed for safety reasons)  
Errors will pop up if the username or password are incorrect  
If you're not logged in and you don't have a session storage and you try to access the home page or any other by directly typing the url you will be logged out immediately  
<div style="align-items:center">
  <img src="https://user-images.githubusercontent.com/72103514/227166567-f243f3f1-9bea-4c14-9e49-f55903ab9aeb.PNG" width="500" height="300">
</div>
![signup](https://user-images.githubusercontent.com/72103514/227166601-e7c0c4d9-67a8-45ed-98b6-9f26f11dcd90.PNG)
![error](https://user-images.githubusercontent.com/72103514/227166647-bc192f1a-3ebc-465a-9e22-0c028750ed6c.PNG)

2/ Home  
In this page you can add new media (Movie, TV Show, Anime)  
Name and year are both required and you can't enter an unreasonable year like 2024 if we're in 2023
Media type is required and must be one of these 3 (mind the casing): Movie, TV Show, Anime  
You can add a rating, add a director if you want, add up to 4 actors and 2 genres  
An error will pop up if something is wrong  
![home](https://user-images.githubusercontent.com/72103514/227167155-c3aa3211-9a6f-440b-8240-7aefb6873ffa.PNG)

3/ Media  
In this page you can see the different medias you watched grouped by type and sorted from newest to oldest  
You can also delete media  
![media](https://user-images.githubusercontent.com/72103514/227167394-4cfdca94-6f58-493f-bcac-5c0e5b14877a.PNG)

4/ Actors  
Here you can see your favorite actors and how many medias of theirs you watched  
They're organized by number of media from most to least  
In the search field you can look for any actor you want  
![actors](https://user-images.githubusercontent.com/72103514/227167709-00cd141f-18b6-49c8-9679-52c2a6bb0b61.PNG)
![search](https://user-images.githubusercontent.com/72103514/227167726-5e3bbb9a-dd62-4640-b625-2beb77843d68.PNG)

5/ Stats  
Here you can see how many movies, tv shows, and animes you watched overall, the number of movies you watched this year, your favorite genres in a pie chart, and a table with your favorite directors  
![satas](https://user-images.githubusercontent.com/72103514/227167879-e7f77e96-3e84-4dc4-a1f4-dce3c46dd256.PNG)

6/ 404 page  
If you type an invalid url you will be encountered with a 404 page where you can click on a button to be sent back to home page  
![404](https://user-images.githubusercontent.com/72103514/227168029-6ebd3e71-b967-49c4-bbd3-128d4708d67a.PNG)

7/ Finally and of course you can logout by clicking logout in the navbar  
  
PS: it's not responsive  

## Support
If you need help email me: azizbechaib711@gmail.com

## Project status
Project is still progressing and more functionalities will be added, stay tuned!
