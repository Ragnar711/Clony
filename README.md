# Clony - Your Movie, TV Show, and Anime Tracker

## Description

Clony is a comprehensive platform designed to help you keep track of your favorite movies, TV shows, and animes. Whether you're a movie enthusiast, a TV show addict, or an anime lover, Clony has got you covered.

## Installation

### Server-side:

1. Run `npm init` followed by `npm install` to set up the server dependencies.
2. Create a database using your preferred service provider supported by Prisma.
3. Specify the database URL in the environment file, as mentioned in the Prisma documentation.
4. In the terminal, execute `npx prisma migrate dev` to synchronize your database with the necessary models.
5. Install nodemon globally with `npm install -g nodemon`, then run it in the terminal using `nodemon`.
6. The server should now be running; if not, follow any error messages and troubleshoot accordingly.

### Client-side:

1. Install pnpm globally by running `npm install -g pnpm`, then initialize the project with `pnpm init`.
2. Install the client-side dependencies by executing `pnpm install`.
3. Start the client-side application with `pnpm run start`.

## Usage

1. **Login and Signup**:

    - On the initial page, you can either log in with your existing account or sign up if you don't have one yet (passwords are securely hashed for your safety).
    - Errors will be displayed if the username or password is incorrect.
    - If you attempt to access any page directly by typing the URL without logging in and without an active session, you will be automatically logged out.

2. **Home**:

    - Add new media on this page.
    - Name and year are required fields, and unreasonable years like 2024 (from the year 2023) are not allowed.
    - The media type must be one of the following: Movie, TV Show, Anime (casing matters).
    - Provide a rating, director (optional), up to four actors, and two genres.
    - Errors will be shown if any input is incorrect.

3. **Media**:

    - View the different media you have watched, grouped by type and sorted from newest to oldest.
    - Delete media from this page.

4. **Actors**:

    - See your favorite actors and the number of media you've watched featuring them.
    - Actors are organized by the number of media from most to least.
    - Use the search field to look for any actor you want.

5. **Stats**:

    - Get an overview of your watching habits, including the total number of movies, TV shows, and animes you've watched.
    - Check the number of movies watched this year, your favorite genres displayed in a pie chart, and a table with your favorite directors.

6. **404 Page**:

    - If you type an invalid URL, you'll be redirected to a custom 404 page with a button to return to the home page.

7. **Logout**:
    - Easily log out by clicking the logout button in the navbar.

Note: Clony is not yet responsive, so please use it on a desktop or laptop for the best experience.

## Support

If you need any assistance or have questions, feel free to email me at azizbechaib711@gmail.com.

## Project Status

Clony is still a work in progress, and more exciting functionalities will be added soon. Stay tuned for updates!
