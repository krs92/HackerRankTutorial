// var items = [5,3,7,6,2,9];
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

str = '{}{}}{()'
var stack = [];
for (var i = 0; i < str.length; i++) {
    stack.push(str[i])
}
console.log(stack);
for (var i = 0; i < str.length; i++) {
switch (stack.pop()) {
    case '{': {
        if (stack.indexOf('}') >= 0) {
            stack.splice(stack.indexOf('}'), 1);
            console.log('11', stack);
        }
    }
        break;
    case '}': {
        if (stack.indexOf('{') >= 0) {
            stack.splice(stack.indexOf('{'), 1);
        }
    }
        break;
    case ']': {
        if (stack.indexOf('[') >= 0) {
            stack.splice(stack.indexOf('['), 1);
        }
    }
        break;
    case '[': {
        if (stack.indexOf(']') >= 0) {
            stack.splice(stack.indexOf(']'), 1);
        }
    }
        break;
    case '(': {
        if (stack.indexOf(')') >= 0) {
            stack.splice(stack.indexOf(')'), 1);
        }
    }
        break;
    case ')': {
        if (stack.indexOf('(') >= 0) {
            stack.splice(stack.indexOf('('), 1);
        }
    }
        break;
}
}
console.log(stack);
if (stack.length > 0) {
    console.log('NO');
} else {
    console.log('YES');
}