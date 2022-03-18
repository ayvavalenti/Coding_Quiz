var submitAns = function () {

    var rad = document.getElementsByName('option');
    var q1 = "";
    var q2 = "";
    var q3 = "";
    var q4 = "";
    var q5 = "";
    var q6 = "";
    var q7 = "";
    var q8 = "";
    var q9 = "";

    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q1 = rad[i].value;
            break;
        }
    }
    if (q1 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q1 == "Immediate if"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }

    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q2 = rad[i].value;
            break;
        }
    }
    if (q2 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q2 == "block that combines a number of statements into a single compound statement"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }

    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q3 = rad[i].value;
            break;
        }
    }
    if (q3 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q3 == "Ignores the statements"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }
    
    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q4 = rad[i].value;
            break;
        }
    }
    if (q4 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q4 == "Declaration statements"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }

    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q5 = rad[i].value;
            break;
        }
    }
    if (q5 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q5 == "The local element"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }

    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q6 = rad[i].value;
            break;
        }
    }
    if (q6 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q6 == "Division by zero"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }

    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q7 = rad[i].value;
            break;
        }
    }
    if (q7 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q7 == "use strict"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }

    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q8 = rad[i].value;
            break;
        }
    }
    if (q8 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q8 == "It returns a localized string representation of the object"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }

    for(var i =0, length = rad.length; i < length; i++){
        if (rad[i].checked){
            q9 = rad[i].value;
            break;
        }
    }
    if (q9 == "") {
        alert('invalid answer, please selection an option');
    }
    else if (q9 == "Array"){
        alert('correct');
    }
    else {
        alert('incorrect');
    }

}