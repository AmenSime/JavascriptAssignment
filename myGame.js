

function generateNum(){
//var randomNumber = Math.floor(Math.random(randomNumber*10));
var on;



var randomNumber=Math.floor(Math.random()*10);
//alert(randomNumber);
//randomNumber = document.getElementById("demo").innerHTML;
var num = document.getElementById("inputNum");

if(randomNumber == num){
    //alert("Congratrulations...");
    var responseText = "Congratulations you guessed right..";
    document.getElementById('answer').innerHTML = responseText;
    

}

else{
    //alert("try again");
    var responseText = "Try Again...";
     document.getElementById('answer').innerHTML = responseText;
     //document.getElementById('inputNum').innerHTML= " ";
     
}
 

}

