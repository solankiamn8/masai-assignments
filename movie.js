const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];

let movieOut = movies
    .filter(movie => movie.rating>7.5)
    .map(movie => ({
        title: movie.title,
        watchTime: parseFloat((movie.watchTime/60).toFixed(2))
    }))

let totalWatch = movieOut.reduce((acc, movie) => acc + movie.watchTime, 0)

console.log(movieOut)
console.log(`Total WatchTime: ${totalWatch}`)