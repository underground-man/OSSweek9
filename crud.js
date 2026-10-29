const apiUrl= "https://6ae2c648bbb54129229a614e.mockapi.io/movies";

async function loadMovies(){
    try{
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error (`HTTP ${response.status}`);

        }

        const movies = await response.json();

        console.log(movies);
        rederMovies(movies);
    } 

    catch(error){
        console.error(error);
    }

    function rederMovies(movies){
        const movielist = document.getElementById("movieList");

        movielist.replaceChildren();

        movies.forEach(function (movie){
        const row = document.createElement("tr");

         const id = document.createElement("td");
        id.textContent = movie.id;

        const title = document.createElement("td");
        title.textContent = movie.title;

        const director = document.createElement("td");
        director.textContent = movie.director;

        const genre = document.createElement("td");
        genre.textContent = movie.genre;

        const releaseYear = document.createElement("td");
        releaseYear.textContent = movie.releaseYear;

        const rating = document.createElement("td");
        rating.textContent = movie.rating;

        const management = document.createElement("td");
        management.textContent = "-";

        row.appendChild(id);
        row.appendChild(title);
        row.appendChild(director);
        row.appendChild(genre);
        row.appendChild(releaseYear);
        row.appendChild(rating);
        row.appendChild(management);

        movielist.appendChild(row);

        
        });
    }

}

loadMovies();
