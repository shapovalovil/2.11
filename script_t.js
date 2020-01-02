'use strict';
let x = 10,
    y = 20;

function showMessage(x1,y1){
   let x = 100;
   let y = 200; 
    return x+y;
}
let calc = (x,y)=>x+y;
console.log(showMessage());
console.log(calc(x,y));
let px = "11.11m";
console.log(parseInt(px));
console.log(parseFloat(px));
let goMy = (x,y,z) => x = y+z; x = x*2;


testt("хи-хи", "dsdsdsdsdsds");

function testt (x11, y11){
//y11 = y11 || "отсутствует второй оператор";
(y11===undefined)? y11 = "отсутствует второй оператор": 'dsds';
    console.log(x11+y11);
}
confirm("fsd");
