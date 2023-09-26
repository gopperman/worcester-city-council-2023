candidates = [
  {
    name: "Coleman",
    popularity: 27.65,
    std: 5.80
  },
  {
    name: "Colorio",
    popularity: 39.86,
    std: 2.48
  },
  {
    name: "Creamer",
    popularity: 30.42,
    std: 3.98
  },
  {
    name: "Petty",
    popularity: 53.04,
    std: 3.46
  },
  {
    name: "Toomey",
    popularity: 49.03,
    std: 4.04
  },
  {
    name: "King",
    popularity: 45.00,
    std: 4.31
  },
  {
    name: "Bergman",
    popularity: 42.94,
    std: 2.98
  },
  {
    name: "Nguyen",
    popularity: 42.56,
    std: 3.98
  },
  {
    name: "Perrone",
    popularity: 27.085,
    std: 7.74
  },
  {
    name: "Hampton-Dance",
    popularity: 27.085,
    std: 7.74
  },
  {
    name: "Morales",
    popularity: 27.085,
    std: 7.74
  },
]

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
}

const runElection = (candidates) => {
  return candidates.map((c) => {
    return {
      name: c.name,
      votes: getRandom((c.popularity - (c.std*2)), c.popularity + (c.std*2))
    }
  })
}

/**
 * Sorts candidates in descending order
 * @param  {object} c1 candidate
 * @param  {object} c2 candidate
 * @return {int}
 */
const compareCandidates = (c1, c2) => {
    if (c1.votes > c2.votes) {
      return -1
    } else if (c1.votes < c2.votes) {
      return 1
    } else {
      return 0
    }
}

const winners = 6 // Number of open seats in the election
let runs = 1000001 // The number of times we want to run the sim
let results = []

while (runs--) {
  let electionResults = runElection(candidates).sort(compareCandidates)
  let electionWinners = electionResults.slice(0,winners)

  electionWinners.forEach((winner) => {
    let index = results.findIndex((candidate) => candidate.name == winner.name)

    if (index > -1) {
      results[index].wins++
    } else {
      results.push({name: winner.name, wins: 0})
    }
  })
}

console.log(results)

