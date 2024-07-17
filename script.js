const main = document.querySelector("main")
const movie_details = document.querySelector("#movie-details")
url = "http://localhost:3000/films"
fetch (url)
.then(response => response.json())
.then(films => 
  films.map(film=>{
  const title= document.createElement("li")
  addEventListener('click',()=> movie_desc(film.id))
  title.innerHTML = film.title
  main.appendChild(title)



  
}) 
)
function movie_desc(filmId){
  fetch ("http://localhost:3000/films")
  .then(response => response.json)
  .then (films=>{
    const description=document.querySelector("#movie-details")
    description.innerHTML=`<h1>${films.title}</h1>
  <div>
  <p>${films.description}</p>
  </div>
  <h2>The movie starts at : ${films.showtime}</h2>
  <h3>There are ${films.capacity - films.tickets_sold} tickets left</h3>
  <img src="${films.poster}"/>
  `


}
  )
}