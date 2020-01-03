


function gemstones(array) {

    console.log(
        new Set(array.toLowerCase() 
          .split('\n')
          .slice(1)
          .map(rock => rock.split(''))
          .reduce((prev, curr) => curr.filter(element => prev.includes(element)))
        ).size
      );
}


 

 var arr = ["abcdde",
"baccd",
"eeabg"]

gemstones(arr)