n = []
c = prompt('введите длинну массива')

for(let i = 0; i< c; i++){
    n.push(prompt('Введите элемент массива, №'+(i+1)))
}

any_percent = n.slice(0,n.length/2)
luk = []
two_percent = n.slice(n.length/2,n.length)

console.log(n)
console.log(any_percent)
console.log(two_percent)

var i = 0

while(true){

    var y = 0

    for(var i=0; i<any_percent.length-1; i++){

        if(any_percent[i]<any_percent[i+1]){
            var temp = any_percent[i]
            any_percent[i] = any_percent[i+1]
            any_percent[i+1] = temp
            y++
        }
    }
    if(y==0){
        console.log('для проверки '+ any_percent)
        break
    }
}

var i = 0

while(true){

    var y = 0

    for(var i=0; i<two_percent.length-1; i++){

        if(two_percent[i]>two_percent[i+1]){
            var temp = two_percent[i]
            two_percent[i] = two_percent[i+1]
            two_percent[i+1] = temp
            y++
        }
    }
    if(y==0){
        console.log('для проверки '+ two_percent)
        break
    }
}
