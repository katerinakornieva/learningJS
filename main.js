// var n = 100;
// console.log(n);
// var i = new Number(8871); //консруктор Number создает объект 
// console.log(i.toFixed(3)); // метод toFixed выводит установленное колво знаков после. т е 3
// var i = 4000;
// console.log(i.toFixed(5)); //toFixed выводит знаки и у переменноой простого типа n
// console.log(i.toExponential(4)); // 4.0000e+3-выводит в экспотенциальной форме, 4000=4*10^3
// var s = 35.78;
// console.log(s.toPrecision(3)); // выводит с определенной точностью и округляет, три знака числа 35.8
// var m;
// m = 'hello';
// alert(m); // выводим содержимое m
// var myNumber=50;
// var myString='some string';
// var myBool=true;
// console.log(myNumber); //выводим myNumber в консоль
// console.log(myString);
// console.log(myBool);
// console.log(typeof myNumber); //унарный оператор typeof определяет тип выражения myNumber это тип number
// var obj={};
// obj.name='new name';
// console.log(obj); // изменили obj c пустого {} на {myNumber}
// var array=[1, 2, 3];
// array[1]=54321;
// console.log(array);// изменили и вывели массив {1, 54321, 3}
// var myString='Lorem, ipsum dolor sit amet';
// console.log(myString);  //выводим строку в консоль
// console.log(myString.toUpperCase()); //выводит всю строку в ВЕРХНЕМ РЕГИСТРЕ 
// var i = 10;
// console.log(++i);// инкремент - увеличение i на 1, выведет 10+1 т е 11
// console.log(i++);
// var i = 10;
// console.log(--i);// декркмент - уменьшение i на 1, выведет 10-1 т е 9
// console.log(i--);
// var string = 'Hello';
// console.log(string + ' world'); //конкатениция -склеивание если значение string строка, тогда выведет Hello world
// var n = 100;
 
// console.log(n += 20);// n=n+20 т е 120
// var n = 100;
//  console.log(n -= 30);//n=n-30   70
//  var n = 100;
//  console.log(n *= 3); //n=n*3  300
//  var n = 100;
// //n += 20; // 120
// //n –= 30; // 70
// //n *= 2; // 200
// // n /= 2; // 50  n=n/2
// // n %= 30; // 10 - остаток от деления n на 30
// // console.log(7 > 9);  // false- вырание имеет ложное значение
// // = оператор присваивания.
// // == оператор сравнения с приведением типов.
// // === оператор строгого сравнения.
// var n = 100;
// console.log(n /= 2); 
// var n = 100;
// console.log(n %= 30); 
// console.log(Math.PI); // выводит значение числа пи
// console.log(Math.E); //выводит значение экспоненты
// console.log(Math.LN10); //натурального логарифма
// console.log(Math.round(25.34)); //округление до ближайшего целого
// console.log(Math.round(89.279));
// console.log(Math.random()*10);
// console.log(Math.pow(2,5)); //возводит в 2 степень 5
// console.log(Math.pow(4,0.5)); //корень числа 4
// console.log('Some "new" string'.length); //длина строки 17 
// console.log('Some \n\tnew \n\t\tstring'); // \n-новая строка \t табуляция
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string.charAt(0)); //выводит нулевой символ строки L
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string.length); //выводит количество символов в строке
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string.substring(10)); //выводит подстроку начиная с 10 символа
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string.substr(10, 5)); //выводит 5 элементов начиная с 10 элта
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string.indexOf('ips')); //выводит номер позиции эл-та с которого найден 'ips' или -1 если не найдено
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string.replace('sit', 'not sit'));
//  //метод replace находи 'sit' и заменяет на  'not sit' в строке и выводит всю строку
//  var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string.split(' ')); //метод split разбивает строку на массив (7) ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipisicing."]
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string.toUpperCase());
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string[0]); //работаем со строкой как с массивом
// var string = 'Lorem ipsum dolor sit amet, consectetur adipisicing.';
// console.log(string[0]);
// console.log(string[6]);

// LESSON 16
// part 1
var someString = 'Non-empty string',
emptyString = '',
newString1 = someString || 'Default string',
newString2 = emptyString || 'Default string';

console.log(newString1);
console.log(newString2);
// part 2 ,3
var browser = {
    name: 'Chrome',
    version: 157,
    license: '60.1.4',
    core: 'webkit',
    sistemO: function() {
        return 'Windows!';
        }
    };
    
    console.log(browser.name);
    console.log(browser.version);
    console.log(browser.license);
    console.log(browser.core);
    console.log(browser.sistemO());

// part 4
var i;
for (i = 1; i <= 20 ; i++) {
if (i%2==0)
console.log(i);
}

// part 5
var Name = 'Mary',
Familymember;
switch(Name) {
case 'John': Familymember = 'father'; break;
case 'Rayana': Familymember = 'mother'; break;
case 'Bob': Familymember = 'sun'; break;
default: Familymember = 'not from our family';
}
console.log(Name + ' ' + Familymember );

// part 6

var n = 7;
var pow = n > 5 ? 'n больше 5' : n < 5 ? 'n меньше 5' : 'n равно 5';
console.log(pow); // n больше 5

// part 7 Выводите значение переменной, пока не достигнуто значение 7
//(используйте цикл while)

var x = 0;
while (x < 7) {
console.log(x);
x++;
}

// part 8. Создайте основную функцию, которая принимает три параметра:
// ○ первые два параметра – числа 2 (число, арг1) и 4 (степень, арг2)
// ○ третий параметр – callback, возвратная функция
// В основной функции выведите сообщение: "Число арг1 в степени арг2".
// Затем выполните возведение числа в степень, результат присвойте
// переменной.
// Передайте переменную в возвратную функцию (арг3), где сгенерируйте
// сообщение: "Результат арг3".
// определяем нашу функцию с аргументом callback
function some_function(arg1, arg2, callback) {
    
    var my_pow = (function (arg1, arg2) {
        if (arg2 !== 1) { return arg1=arg1*(arg2 - 1); }
        else { return arg1; }
        });
    // теперь всё готово и  мы вызываем callback, куда передаём наш результат
    callback(my_pow);
}
// вызываем функцию
some_function(2, 4, function (arg3) {
    // эта анонимная функция выполнится после вызова callback-функции
    console.log('Результат арг3 ' + arg3);
});
