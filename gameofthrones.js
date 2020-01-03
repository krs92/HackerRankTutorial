
var s  = "cdcdcdcdeeereeeef"

function gameOfThrones(s){
    var mySet= new Set();
    for(var i=0; i<s.length; i++){
        mySet.add(s.charAt(i));   
    }
    var even=0; 
    var odd=0;
    
    for(var item of mySet){
        console.log(item)
        var count=0;
     
        for(var i=0; i<s.length; i++){
            if(item==s[i]){
                count++;
            }   
        }
     
        if(count%2==0){
            even++;
        }
        else{
            odd++;
        }
        if(s.length%2==0){
            if(odd>0){
                return "NO";
            }
        }
            else{
                if(odd>1){
                    return "NO";
                }
            }
        
    }
    return "YES";
}


console.log(gameOfThrones(s))