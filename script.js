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

function movie_desc(filmId){
  console.log("----",filmId)
  fetch ("http://localhost:3000/films/"+filmId)
  .then(response => response.json())
  .then (film=>{
    console.log(film)
    const description=document.querySelector("#movie-details")
    description.innerHTML=`<h1>${film.title}</h1>
  <div>
  <img src="${film.poster}"/>
  <p>${film.description}</p>
  </div>
  <h2>The movie starts at : ${film.showtime}</h2>
  <h3>There are ${film.capacity - film.tickets_sold} tickets left</h3>
  
  `

  

}
  )
}
