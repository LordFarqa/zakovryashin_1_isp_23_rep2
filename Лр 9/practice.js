var a = prompt();
var slovo = a.toLowerCase();
var slovo_arr = slovo.split('');
var shifr_slovo = '';

console.log('Исходное слово: ' + slovo);

var russianAlphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

for(let i = 0; i<slovo_arr.length ;i++){
    for(let j = 0;j<russianAlphabet.length;j++){
        if(slovo_arr[i] == russianAlphabet[j]){
            if(j<10){
                shifr_slovo = shifr_slovo + '0' + j;
            }
            else{
                shifr_slovo = shifr_slovo + j;
            }
        }
    }
}

console.log('Шифрованное слово: ' + shifr_slovo);