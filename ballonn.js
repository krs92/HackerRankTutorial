// alphabet = 'qwertyuiopasdfghjklzxcvbnm';
// function empty_frequences(dict){
//     var freqs = {};
//     var i=0;
//     for(i=0; i<dict.length; i++){
//         freqs[dict[i]] = 0;
//     }
//     return freqs;
// }

// function frequences(str){
//     var freqs = empty_frequences(str);
//     var i;
//     for(i=0; i<str.length; i++){
//         freqs[str[i]] += 1;
//     }
// }

// function matcher(word,dict){
//      //returns a function that matchs against this word
//      var word_freqs = frequences(word);
//      function do_the_match(word2){
//          var freqs2 = frequences(word2);
//          var i, c;
//          for(i=0; i<dict.length; i++){
//              c = dict[i]
//              if(freqs[c] > freqs2[c]){return false;}
//              //change > to != to allow only strict anagrams
//          }
//          return true;
//      }
//      return do_the_match;
//  }

//  function main(word, dict){
//      var mf = matcher(word,dict);
//      var i, matcheds = [];
//      for(i=0; i<dict.length; i++){
//          if(mf(dict[i])){ matcheds.push(dict[i]); }
//      }
//      return matcheds;
//  }

//  console.log(main("BALLON","BABALLONLLBALLONON"))

function anagrams(stringA, stringB) {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);
  
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
      return false;
    }
  
    for (let char in charMapA) {
      if (charMapA[char] !== charMapB[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  function buildCharMap(str) {
    const charMap = {};
  
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    return charMap;
  }

   console.log(anagrams("BALLON","BABALLONLLBALLONON"))
