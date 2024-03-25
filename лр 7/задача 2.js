function calculate(){
    let num1 = document.getElementById("inputnum1").value;
    let num2 = document.getElementById("inputnum2").value;
    let num3 = document.getElementById("inputnum3").value;
    let negatives = 0;
    let evens = 0;

    if (num1 < 0) {
        negatives++;
    }

    if (num2 < 0) {
        negatives++;
    }

    if (num3 < 0) {
        negatives++;
    }

    if (num1 % 2 === 0) {
        evens++;
    }

    if (num2 % 2 === 0) {
        evens++;
    }

    if (num3 % 2 === 0) {
        evens++;
    }
    document.getElementById("divResultEvens").innerHTML =  'Кол-во четных ' + evens;
    document.getElementById("divResultNegatives").innerHTML =  'Кол-во отрицательных' + negatives;
}
