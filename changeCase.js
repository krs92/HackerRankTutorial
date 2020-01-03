var s1 = "sHikHA"

var arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function changeCase(s) {
  var sorted = s.sort()
  let pairs = 0
  console.log(sorted);
  for (let i = 0; i < sorted.length-1; i++) {
    if (sorted[i] === sorted[i+1]) {
        pairs++
         i += 1
    }
  }
  console.log(pairs)
  
}


console.log(changeCase(arr))