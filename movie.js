const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];

// Objective; Output 1: List of Highly Rated Movies with watchTime in hrs
let movieOut = movies
    .filter(movie => movie.rating>7.5)  // .filter to remove other movies
    .map(movie => ({    // converting watchTime to hrs
        title: movie.title,
        watchTime: parseFloat((movie.watchTime/60).toFixed(2))
    }))

// Output 2: total watchTime for movies in Output 1
let totalWatch = movieOut.reduce((acc, movie) => acc + movie.watchTime, 0)

console.log(movieOut)
console.log(`Total WatchTime: ${totalWatch}`)