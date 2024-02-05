alert('Программа для расчета количества отрезков длинны b на отрезке длинны a')
var len_a = prompt('Введите длинну отрезка а')
var len_b = prompt('Введите длинну отрезка b')
var count = parseFloat(len_a) / parseFloat(len_b)
alert('Количесвто отрезков длинны '+ len_b + 
' на отрезке длинны '+ len_a + ' равняется ' + Math.floor(parseFloat(len_a) / parseFloat(len_b)))