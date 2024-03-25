function calculate(){
    let a = document.getElementById("inputa").value;
    let b = document.getElementById("inputb").value;
    if(a > 2 && b <= 3){
        document.getElementById("divResult").innerHTML =  'TRUE, a = '+ a + ' and  b = '+b;
    }
    else{
        document.getElementById("divResult").innerHTML =  'FALSE, a = '+ a + ' and  b = '+b;

    }
}
