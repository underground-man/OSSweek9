const apiUrl= "https://6ae2c648bbb54129229a614e.mockapi.io/movies";

async function loadMovies(){
    try{
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error (`HTTP ${response.status}`);

        }

        const movies = await response.json();

        console.log(movies);
    } 

    catch(error){
        console.error(error);
    }

    loadMovies();
}
