const movies = [
    {title : "matrix", IsAdult : false},
    {title : "kingsman", IsAdult : true},
    {title : "zootopia", IsAdult : false}
]

let babyMovies = movies.filter(function (movie){
    return movie.IsAdult
})

console.log(babyMovies)

let baby = movies.reduce(function (acc, move){
    if(!move.IsAdult)(acc.push(move.title))
        return acc
    },[])
    
console.log('영화제목:',baby)