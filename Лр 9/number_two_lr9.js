function calculate(){
    var n = document.getElementById("inputn").value;
    arr = [];
    arr_finnal = []
    for(let i = 0; i < n; i++){
        arr.push(prompt());
    }
    for(let i = 2; i < arr.length;i= i + 3){
        arr_finnal.push(arr[i]);
    }
    document.getElementById("divResult").innerHTML =  arr_finnal;
    document.getElementById("divResultArr").innerHTML =  'ИСХОДНЫЙ МАССИВ [' + arr+ ']';
}
