const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];

// destruct first athele's name & sport
let [{name: name, sport: sport}] = athletes
console.log(`${name} plays ${sport}`)

// destruct scores of neeraj
let [, , {scores: [first, second, ...rest]}] = athletes
console.log(`${first}, ${second}, `,rest)

// new object for neeraj & update
let [, , neeraj] = athletes
let newObj = {...neeraj, age: 27, worldChampion: true}
console.log(newObj)

// merge all scores into a single array
let allScores = [].concat(...athletes.map(a => a.scores))
console.log(allScores)