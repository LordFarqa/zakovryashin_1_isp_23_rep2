//Дано целое число N > 1, а также первый член A и знаменатель D геометрической прогрессии.  
//Сформировать  и  вывести  массив  размера  N, содержащий N первых членов данной прогрессии,  A·D,A·D2,A·D3,. . . ..
function calculate(){
    var n = document.getElementById("inputn").value;
    var a = document.getElementById("inputa").value;
    var d = document.getElementById("inputd").value;
    arr = []
    for(let i = 1; i <=n;i++){
        arr.push(a*(d**i))
    }
    document.getElementById("divResult").innerHTML =  arr;
    document.getElementById("divResultN").innerHTML = "длинна "+ n;
    document.getElementById("divResultA").innerHTML =  'первый член '+ a;
    document.getElementById("divResultD").innerHTML =  'знаменатель  геометрической прогрессии '+d;
}
