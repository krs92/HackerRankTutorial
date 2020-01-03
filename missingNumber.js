var a = [1,2,3,4,5,6,7,8,9,10]

function missing(a){
console.log(a)
for (let i = 0; i < a.length; i++) {
    if(a[i]-a[i-1] == -1){
        console.log(a[i])
    }
    
}
}
missing(a)