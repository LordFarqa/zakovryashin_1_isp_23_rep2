function calculate(){
    var a = 3.9
    var b = 4.6
    let x = document.getElementById("inputx").value;
    if (3 <= x && x <= 5){
        let y = x +(Math.cos(a*x))/(x**2 + 1)
        document.getElementById("divResult").innerHTML =  'Функция вида: x + (cos(a*x))/x^2 + 1 = ' + (parseFloat(y).toFixed(2)+1);
        document.getElementById("div_x_out_put").innerHTML ='x = '+ parseFloat(x);
    }
    if (x > 5){
        let y = (b * Math.sin(a/x))
        document.getElementById("divResult").innerHTML =  'Функция вида: b * sin(a/x) = ' + (parseFloat(y).toFixed(2));
        document.getElementById("div_x_out_put").innerHTML ='x = '+ parseFloat(x);
    }
    if (x<3){
        let y = (Math.exp(1)**x + Math.log(Math.abs(x)))
        document.getElementById("divResult").innerHTML =  'Функция вида: E^x + ln(|x|) = ' + (parseFloat(y).toFixed(2));
        document.getElementById("div_x_out_put").innerHTML ='x = '+ parseFloat(x);
    }
}
