// alphabet = 'BALLON';
// function empty_frequences(){
//     var freqs = {};
  
//     for(var i=0; i<alphabet.length; i++){
//         freqs[alphabet[i]] = 0;
//     }
//     return freqs;
// }

// function frequences(str){
//     var freqs = empty_frequences();
//     var i;
//     for(i=0; i<str.length; i++){
//         freqs[str[i]] += 1;
//     }
//     console.log(freqs)
   
// }

// var s2 = "BALLONAAA"

// console.log(frequences(s2))

function findWord(word, jumbledLetters) {  
    var isSameWord
    var count = 0
    if(isSameWord && word.length !== jumbledLetters.length)  
      return false;  
      
    var uniquePosition = {};  
    for(var i = 0; i< word.length; i++)  
      for(var j=0; j< jumbledLetters.length; j++){  
        if(word[i] === jumbledLetters[j] && j !== uniquePosition[j]) {  
          uniquePosition[j] = j;  
          break;  
        }  
      }  
    
     if(Object.keys(uniquePosition).length === (word.length)){
       count++
       console.log(count,Object.keys(uniquePosition))
     }
  }  
    
    
  console.log(findWord('BALLON', 'BALLOBALBALLONLONNBALLON'));  // prints true

  
  
// var textList = "BALLOBALBALLONLONNBALLONBALLON"
// var list = textList.match(/^.*$/gim);
// var sortedList = [];
// list.forEach(function(element, index, array) {
//     sortedList[index] = element.split("").sort().join("");
// });

// function unscramble(word)
// {
//     word = word.toUpperCase().split("").sort().join("");
//     var matches = [];
//     for (var i = 0; i < list.length; i++) {
//         if (word.indexOf(sortedList[i]) >= 0) {
//             if (!matches[list[i].length])
//                 matches[list[i].length] = [];
//             matches[list[i].length].push(list[i]);
//         }
//     }
//     console.log(matches)
//     return matches;
// }

// var word = "BALLON"
// console.log(unscramble(word))