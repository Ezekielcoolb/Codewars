// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
function love(n) {
    let sorted = n.sort((a,b) => a - b)
    if (sorted[sorted[0]] < sorted[sorted[1]] ) {
      console.log(sorted[sorted[0]]);
    } else if (sorted[sorted.length-1] > sorted[sorted[0]]) {
      console.log(sorted[sorted.length-1]);
    }
    // let array = n[0]
    // for (let i = 1; i < n.length; i++) {
    //   if ( array !== n[i]) {
    //    return ( n [i])
    //   }
    // }
  }
  love ([1,1,1,1,1,3])