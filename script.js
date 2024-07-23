const main = document.querySelector("main")
const movie_details = document.querySelector("#movie-details")
url = "http://localhost:3000/films"
fetch (url)
.then(response => response.json())
.then(films => 
  films.map(film=>{
  // console.log(film.id)
  const title= document.createElement("li")
  title.addEventListener('click',()=> { movie_desc(film.id) })
  title.innerHTML = film.title
  main.appendChild(title) 

   
}) 
)

function movie_desc(filmId) {
  console.log("----", filmId);
  fetch("http://localhost:3000/films/" + filmId)
    .then(response => response.json())
    .then(film => {
      console.log(film);
      const description = document.querySelector("#movie-details");
      description.innerHTML = `
        <h1>${film.title}</h1>
        <div>
          <img src="${film.poster}"/>
          <p>${film.description}</p>
        </div>
        <h2>The movie starts at: ${film.showtime}</h2>
        <h3>There are ${film.capacity} available tickets</h3>
        <h3 id="tickets-left">There are ${film.capacity - film.tickets_sold} tickets sold</h3>
        <button id="reduce-tickets-btn">Buy Tickets</button>
      `;

      const reduceTicketsBtn = document.querySelector("#reduce-tickets-btn");
      reduceTicketsBtn.addEventListener("click", () => {
        // Simulate reducing the number of tickets sold
        if (film.tickets_sold > 0) {
          film.tickets_sold--;

          // Update the frontend with the new ticket count
          const ticketsLeft = film.capacity - film.tickets_sold;
          const ticketsLeftElement = document.querySelector("#tickets-left");
          ticketsLeftElement.textContent = `There are ${ticketsLeft} tickets Sold`;
        } else {
          alert("There are no tickets left.");
        }
      });
    });
}