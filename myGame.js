

function generateNum(){


var multiple;

var randomNumber=Math.floor(Math.random()*multiple);
var num = document.getElementById("inputNum");

if(randomNumber == num){
    var responseText = "Congratulations you guessed right..";
    document.getElementById('answer').innerHTML = responseText;
    

}

else{
      var responseText = "Try Again...";
     document.getElementById('answer').innerHTML = responseText;
     document.getElementById('inputNum').innerHTML = null;
 
     
}
 

}

;