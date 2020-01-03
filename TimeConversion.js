function timeConversion(s) {
    var hours = parseInt(s.substring(0, s.indexOf(':')));
    var minutes = parseInt(s.substring(s.indexOf(':') + 1, s.lastIndexOf(':')));
    var seconds = parseInt(s.substring(s.lastIndexOf(':') + 1, s.lastIndexOf(':') + 3));
    var newHours;
    if(hours === 12) {
        newHours = 0;
    } else {
        newHours = hours;
    }
    var shift;
    if(s.toLowerCase().indexOf('pm') > -1) {
        shift = 12;
    } else {
        shift = 0;
    }
 
    var formatedHours = format((newHours + shift).toString());
    var formatedMinutes = format(minutes.toString());
    var formatedSeconds = format(seconds.toString());
 
    
 
    function format(numString) {
        if(numString.length === 1) {
            return "0" + numString;
        }
        return numString;
    }

    return formatedHours + ":" + formatedMinutes + ":" + formatedSeconds;
}


var t = "08:13:45PM"

console.log(timeConversion(t))