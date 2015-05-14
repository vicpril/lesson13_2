//SOLUTION #2

var $date = new Array(5);

for(i=0; i<5; i++){
  var time = Math.floor((Math.random() * (Date.now() - 1) + 1));
  $date[i] = new Date (time);
}


$date.forEach(function(entry) {
    document.write(entry.toString()+"<br>");
});

function sortByDay($a,$b)                           
{
    if ($a.getDay() == $b.getDay()){
        return 0;
    }
    return ($a.getDay() < $b.getDay()) ? -1 : 1;
}

function sortByDate($a,$b)                           
{
    if ($a.getDate() == $b.getDate()){
        return 0;
    }
    return ($a.getDate() < $b.getDate()) ? -1 : 1;
}

function sortByMonth($a,$b)                           
{
    if ($a.getMonth() == $b.getMonth()){
        return 0;
    }
    return ($a.getMonth() < $b.getMonth()) ? -1 : 1;
}

function sortByTime($a,$b)                           
{
    if ($a.getTime() == $b.getTime()){
        return 0;
    }
    return ($a.getTime() < $b.getTime()) ? -1 : 1;
}

$date.sort(sortByDay);
document.write("<br>Min day: "+$date[0].toDateString()+"<br>");
$date.sort(sortByMonth);
document.write("Max Month: "+($date[4].getMonth()+1)+"<br>");

$date.sort(sortByTime);
var $selected = $date.pop();
document.write("$selected: "+$selected.getDate()+"."+($selected.getMonth()+1)+
    "."+$selected.getFullYear()+" "+$selected.getHours()+":"+$selected.getMinutes()+":"+
      $selected.getSeconds()+"<br>");
      
document.write($selected.getTimezoneOffset()/60+"<br>")
document.write($selected.toTimeZone()+"<br>")