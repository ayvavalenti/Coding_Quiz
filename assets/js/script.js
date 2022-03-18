// question stuff

var score = 0;
var correct = function(val, rightAns, form, span){
    var form = document.getElementById(form);
    var span = document.getElementById(span);
    
        span.innerHTML = rightAns;

        if(val == rightAns){
            form.innerHTML = alert ('correct!');
        }
        else {
            form.innerHTML = alert ('incorrect');
        }

    }
    
    function correctAns (){
        
    }
    

    if (val == rightAns){
        score = ()
    }
    
   


// timer stuff

var timeL = 10;
var cdTimer = setInterval(function(){
    if (timeL <= 0){
        clearInterval(cdTimer);
    }
    document.getElementById("timer").value = 10 - timeL;
    timeL -= 1;
}, 1000);
<progress value = "0" max="10" id="timer"></progress>