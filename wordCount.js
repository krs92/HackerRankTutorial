var s ='aabbcd'


function wordcount(s) {
    var obj = {}
    // var word
    for (let i = 0; i < s.length; i++) {
        let word =  s[i]
        obj[word] = obj[word] ? obj[word] + 1: 1
        console.log(obj)

    }
}

console.log(wordcount(s))

function simpleLeaps (first, last, k){
    let delta = last - first;
    let count = (delta - delta % k) / k;
    if(delta % k >= last % k) count++;
    return count;
}

function leaps (first, last) {
    first--; last--;
    return simpleLeaps(first, last, 4) -
        simpleLeaps(first, last, 100) +
        simpleLeaps(first-200, last-200, 900) +
        simpleLeaps(first-600, last-600, 900);
}

console.log(leaps(123456789101112, 1314151617181920))