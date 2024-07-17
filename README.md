# Wk3-Code-Challenge
# Flatdango - Movie Theater

Flatdango is a web application that allows users to purchase movie tickets from the theater. It provides a user-friendly interface for browsing movies, selecting movie details, and purchasing tickets.

## Functionality

- Fetch movie data from the server using the appropriate endpoints.
- Display movie details on the page, including title, runtime, showtime, available tickets, and poster image.
- Allow users to buy tickets for a movie.
- Persist the updated number of tickets sold on the server using PATCH request.
- Allow users to delete movies from the server.

## Project Setup

1. Create a new project folder and initialize it as a Git repository.
2. Create a new private GitHub repository and add your team members as contributors.
3. Set up a local server using JSON DB server and use the provided db.json file as your server's database.
4. Fetch the movie data from the server using the appropriate endpoints and display the first movie's details on the page.
5. Implement the functionality to buy a ticket for a movie.
6. Implement the functionality to delete a movie from the server.


## Usage

Once you have the Flatdango application up and running, you can perform the following actions:

- Browse the list of available movies in the left menu.
- Click on a movie to display its details, including the poster image, title, runtime, showtime, available tickets, and description.
- Click the "Buy Ticket" button to purchase a ticket for the selected movie. The available tickets count will be updated accordingly.
- If a movie is sold out (no available tickets remaining), the "Buy Ticket" button will be disabled and labeled as "Sold Out".
- To delete a movie, click the delete button next to the movie in the left menu. The movie will be removed from the list and deleted from the server.
