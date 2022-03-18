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
        if (val == rightAns){
            score = +10;
        }
        else{
            score = -5;
        }

    }
    // questions - all quesitons found on https://www.javatpoint.com/javascript-mcq

    var ques = [
        //q1
        {
            q: 'Which one of the following also known as Conditional Expression:',
            o: ['Alternative to if-else', 'Switch statment', 'If-then-else statement', 'Immediate if'],
            a: "Immediate if"
        },
        //q2
        {
            q:'In JavaScript, what is a block of statement?',
            o:['Conditional block','block that combines a number of statements into a single compound statement','both conditional block and a single statement','block that contains a single statement'],
            a:"block that combines a number of statements into a single compound statement"
        },

        //q3
        {
            q:'When interpreter encounters an empty statements, what it will do:',
            o:['Shows a warning','Throws an error', 'Ignores the statement','Prompts to complete the statement'],
            a:"Ignores the statement"
        },

        //q4
        {
            q:'The "function" and " var" are known as:',
            o:['Data types','Prototypes','Declaration statements','keywords'],
            a:"Declaration statements"
        },

        //q5
        {
            q:'Which of the following variables takes precedence over the others if the names are the same?',
            o:['The local element','Global variable','Both the local element and global variable','none of these'],
            a:"The local element"
        },

        //q6
        {
            q:'In the JavaScript, which one of the following is not considered as an error:',
            o:['Division by zero','Missing of Bracket','Missing of semicolons','Syntax error'],
            a:"Division by zero"
        },

        //q7
        {
            q:'Which one of the following is not a keyword:',
            o:['with','if','debugger','use strict'],
            a:"use strict"
        },

        //q8
        {
            q:'A collection of elements of the same data type which may either in order or not, is called',
            o:['String','Serialized Object','Array','Object'],
            a:"Array"
        },

        //q9
        {
            q:'What is the basic purpose of the "toLocateString()" method?',
            o:['It returns a localized string representation of the object','It return a parsed string','It return a local time in the string format','It returns a localised object representation'],
            a:"It returns a localized string representation of the object"
        }
    ]

    


    
   


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