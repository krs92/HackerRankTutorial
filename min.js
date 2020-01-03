
var cars = [2,10,8,17]
var k =3
console.log(carParkingRoof(cars,k))

function carParkingRoof(cars,k) {
    var c = cars.sort()
    var minArray = new Array(cars.length -k+1)
    console.log(minArray)
    for (let index = 0, j = index+k-1; index < cars.length; index++) {
        if(j < cars.length){
            minArray[index] = cars[j] - cars[index]+1;
        }else {
            return 
        }
        console.log(Math.min(minArray))
        // return minArray.min()
        
    }
    console.log(Math.min(minArray))
}





// public static long carParkingRoof(List<Long> cars, int k) {
//     cars.sort(Comparator.naturalOrder());
//     long[] min_arr = new long[cars.size() - k + 1];
//     for (int i = 0, j = i + k - 1; i < cars.size(); i++, j++) {
//         if (j < cars.size()) {
//             min_arr[i] = cars.get(j) - cars.get(i) + 1;
//         } else
//             break;
//     }
//     return Arrays.stream(min_arr).min().getAsLong();
// }