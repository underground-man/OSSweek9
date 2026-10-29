const apiUrl= "https://6ae2c648bbb54129229a614e.mockapi.io/movies";
let editingId = null;

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

const editButton = document.createElement("button");

editButton.type = "button";
editButton.textContent = "수정";

editButton.addEventListener("click", function () {
    editingId = movie.id;

    document.getElementById("title").value = movie.title;
    document.getElementById("director").value = movie.director;
    document.getElementById("genre").value = movie.genre;
    document.getElementById("releaseYear").value =
        movie.releaseYear;
    document.getElementById("rating").value = movie.rating;

    document.getElementById("submitButton").textContent =
        "수정";

    document.getElementById("cancelButton").hidden = false;
});

management.appendChild(editButton);

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


async function addMovie(movie){
    const response = await fetch (apiUrl,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    });

    if(!response.ok){
        throw new Error(`HTTP ${response.status}`);
    }

    await loadMovies();
}

async function updateMovie(id, movie) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    await loadMovies();
}


const movieform = document.getElementById("movieform");

movieform.addEventListener("submit",async function(event){
    event.preventDefault();

    if(!movieform.checkValidity()){
        return;
    }

    const movie ={
                title: document.getElementById("title").value,
        director: document.getElementById("director").value,
        genre: document.getElementById("genre").value,
        releaseYear: Number(
            document.getElementById("releaseYear").value
        ),
        rating: Number(
            document.getElementById("rating").value
        )
    }

    console.log(movie);

    const message = document.getElementById("message");

try {
    if (editingId === null) {
        await addMovie(movie);
        message.textContent = "영화 등록 성공";
    } else {
        await updateMovie(editingId, movie);
        message.textContent = "영화 수정 성공";

        editingId = null;
    }

    movieform.reset();

    document.getElementById("submitButton").textContent =
        "등록";

    document.getElementById("cancelButton").hidden = true;
} catch (error) {
    console.error(error);
    message.textContent = "요청 실패";
}


});

const cancelButton =
    document.getElementById("cancelButton");

cancelButton.addEventListener("click", function () {
    editingId = null;

    movieform.reset();

    document.getElementById("submitButton").textContent =
        "등록";

    cancelButton.hidden = true;

    document.getElementById("message").textContent =
        "수정을 취소했습니다.";
});
