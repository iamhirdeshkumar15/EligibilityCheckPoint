//js

function ages() {
    var x = document.getElementById("b").value;
    var age = parseInt(x);
    if (age >= 18) {
        alert("You are eligible to vote. Age: " + age);
    } else {
        alert("You are not eligible to vote. Age: " + age);
    }
}

function even() {
    var x = document.getElementById("b").value;
    var num = parseInt(x);
    if (num % 2 == 0) {
        alert("Number is Even. Value: " + num);
    } else {
        alert("Number is Odd. Value: " + num);
    }
}

function div() {
    var x = document.getElementById("b").value;
    var num = parseInt(x);
    if (num % 5 == 0) {
        alert("Number is divisible by 5. Value: " + num);
    } else {
        alert("Number is not divisible by 5. Value: " + num);
    }
}
