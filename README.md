# Clony - Your Movie, TV Show, and Anime Tracker

## Description

Clony is your ultimate platform for managing your favorite movies, TV shows, and anime. Whether you're a cinephile, a TV series aficionado, or an anime enthusiast, Clony has you covered.

## Installation

### Server-side

1. **Install Dependencies**: Begin by running `npm install` to set up the server dependencies.

2. **Database Setup**: Create a database using your preferred service provider supported by Prisma.

3. **Database Configuration**: Specify the database URL in the environment file, following Prisma's documentation.

4. **Database Migration**: In the terminal, execute `npx prisma migrate dev` to synchronize your database with the necessary models.

5. **Server Launch**: Install nodemon globally with `npm install -g nodemon`, then run it in the terminal using `nodemon`.

6. **Server Status**: Your server should now be running; if not, follow any error messages and troubleshoot accordingly.

### Client-side

1. **Global Package**: Install pnpm globally by running `npm install -g pnpm`.

2. **Client Dependencies**: Install the client-side dependencies by executing `pnpm install`.

3. **Client Start**: Start the client-side application with `pnpm run start`.

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

**Note**: Clony is not yet responsive, so please use it on a desktop or laptop for the best experience.

## Support

If you need any assistance or have questions, feel free to email me at [azizbechaib711@gmail.com](mailto:azizbechaib711@gmail.com).

## Project Status

Clony is still a work in progress, and more exciting functionalities will be added soon. Stay tuned for updates!
