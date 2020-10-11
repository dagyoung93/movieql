export let movies = [
    {
       id : 1,
       name : "Star Wars - The new one",
       score : 2
     },
     {
        id : 2,
        name : "Avengers - The new one",
        score : 7
    },
    {
        id : 3,
        name : "Harry Potter and the Philosopher's Stone",
        score : 10
    },
    {
        id : 4,
        name : "Sing Street",
        score : 10
    },
 ];
 //내 데이터 소스()

 export const getMovies = () => movies; 

 export const getById = id =>{
        const filteredMovies = movies.filter(movie => movie.id === id);
        return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie  => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movie = cleanedMovies;
        return true;
    }else{
        return false;
    }
};
export const addMovie = (name, score) =>{
    const newMovie ={
        id : `${movies.length +1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};