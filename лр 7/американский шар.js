
function call(btnEvent){
    var c = parseInt(Math.random() * 10)
    console.log(c)
    switch(c) {
        case 1:  
            var out_put = 'Тебе будит плохо';
            break;
        case 2: 
            var out_put = 'все будеть хорошо';
            break;
        case 3: 
            var out_put = 'Погладь кота';
            break;
        case 4:  
            var out_put = 'Выпей чаю';
        case 5: 
            var out_put = 'Cьешь сладких французких булок';
            break;
        case 6:  
            var out_put = 'Не подписывайте ненужных документов';
            break;
        case 7:  
            var out_put = 'Не ходи на пару';
            break
        default:
            var out_put = 'Едь на трамвае';
            break;
        }
    document.getElementById('ball_text').innerHTML= out_put;
}