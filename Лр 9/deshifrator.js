const string = prompt();

const array = string.split("");
const pairedArray = [];
var russianAlphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
for (let i = 0; i < array.length; i += 2){
    pairedArray.push(array.slice(i, i + 2));
}

console.log(pairedArray);
let str = ' '

for(let j = 0; j < pairedArray.length;j++){
    for(let g = 0; g < russianAlphabet.length;g++){
        if(parseInt(pairedArray[j])) 
            str = str + russianAlphabet[parseInt(pairedArray[g])]
        
        

    }
}
console.log(str)