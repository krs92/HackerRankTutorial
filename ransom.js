function ransomNote(magazine, note) {
    let object = {};
    let match = '';

    for (let i = 0; i < magazine.length; i++){
        let word = magazine[i];
        object[word] = object[word] ? object[word] + 1 : 1; 
        console.log(object,"object")

    }

    for (let i = 0; i < note.length; i++){
        if (!(note[i] in object)) {
             
            match = 'No';
            break;
        } else {
            if (object[note[i]] < 1) {
                match = 'No'
                break;
            }
            object[note[i]] = object[note[i]] - 1;
        }
    }
    if (match === '') {
        // console.log(note[i],object[word]);

        match = 'Yes' }
}


var c = "Hello World"
var d ="Hell Wl"

ransomNote(c,d)