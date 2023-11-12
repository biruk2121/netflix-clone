const API_KEY = "e92e9dbb6a0d8b885cd35d8d548b68bf";
const requests = {
 fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
 fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,       
}




export default requests;



// http://api.themoviedb.org/3/trending/all/week?api_key=e92e9dbb6a0d8b885cd35d8d548b68bf&language=en-US