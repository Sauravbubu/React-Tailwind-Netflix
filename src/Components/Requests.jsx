const key="d90d967a1bce1e876d8d1892071051da";
const url={
    upcomming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    recommendations:`https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=en-US&page=1`,
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    toprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
    
}
export default url
