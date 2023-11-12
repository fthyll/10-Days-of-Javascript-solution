function rotateLabels() {
    // Get the button elements by their ids
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn6 = document.getElementById('btn6');
    var btn7 = document.getElementById('btn7');
    var btn8 = document.getElementById('btn8');
    var btn9 = document.getElementById('btn9');

    // Store the current innerHTML values
    var temp1 = btn1.innerHTML;
    var temp2 = btn2.innerHTML;
    var temp3 = btn3.innerHTML;
    var temp4 = btn4.innerHTML;
    var temp6 = btn6.innerHTML;
    var temp7 = btn7.innerHTML;
    var temp8 = btn8.innerHTML;
    var temp9 = btn9.innerHTML;

    // Update the innerHTML values in a clockwise direction
    btn1.innerHTML = temp4;
    btn2.innerHTML = temp1;
    btn3.innerHTML = temp2;
    btn4.innerHTML = temp7;
    btn6.innerHTML = temp3;
    btn7.innerHTML = temp8;
    btn8.innerHTML = temp9;
    btn9.innerHTML = temp6;
}
