// Given an array of positive integers (the weights of the people), 
// return a new array/tuple of two integers, where the first one is the total weight of team 1, 
// and the second one is the total weight of team 2.

// e.g rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
function rowWeights(array){
    let teamOne = 0
    let teamTwo = 0
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
          return teamOne += array[i]
      } else {
          return teamTwo += array[i]
      }
      result.push(teamOne, teamTwo)
      return result
    }
    return arr;
  }

