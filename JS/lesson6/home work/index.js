// 1. Преобразовать строку в массив слов

// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//     return str.split(" ");
// };
// var arr = stringToarray(str);
// console.log(arr);

// 2. Удаление указанного количества символов из строки

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// ВАРИАНТ 1
// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     return str.slice(0,21);
// };
// console.log(length);

// ВАРИАНТ 2
// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
// if (length>0){
// return str.slice(0,length);
// }
// };
// console.log(delete_characters(str,1));


// 3. Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и 
// вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";
// function insert_dash(str) {
// return str.trim().toUpperCase().replace(str).replace(/\s/g, "-");//создаёт регулярное выражение, которое ищет один или более символов, после которых следует пробел
// };
// console.log(insert_dash(str));


// 4. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// let str = "string not starting with capital";  
// function cursive_letter(str) {

//     return str.charAt(0).toUpperCase()+str.slice(1);
// }
// let newStr = cursive_letter(str);
// console.log(newStr);


// 5. Первая буква каждого слова заглавная

// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// let str = "каждый охотник желает знать";  
// function capitalize(str) {
// return  str.replace(/(^|\s)\S/g,function(str) {return str.toUpperCase()})   //Регулярные выражения 
// };
// console.log(capitalize(str));


// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку 
// и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
// то на выходе должно быть «кАжДыЙ оХоТнИк».

//  const change_register=(str)=>{
//     let newStr = " ";
// for(let i=0;i<str.length;i+=1){
//     if(str[i]===str[i].toLowerCase()){
//       newStr += str[i].toUpperCase();  
//     }else{
//         newStr += str[i].toLowerCase();
//     }
// }
// return newStr;
// }
// console.log(change_register ("КаЖдЫй ОхОтНиК жЕлАеТ зНаТь"));


// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.


// let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
 
// function remove_char(str) {
//     return str.match(/\w+/g); 
// };
// console.log(remove_char(str));

// 8. Нулевое заполнение строки

// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным 
// знаком «+» или « -« в зависимости от передаваемого аргумента.




//     9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
// let str1="яблОко";
//     let str2="яблокои";

// function comparison(str1, str2) {
//     str1=str1.toLowerCase();
//     str2=str2.toLowerCase();

//     if(str1>str2){
//         return "Строка 1 больше строки 2";
//     }else if (str1===str2){
//         return "строки равны";
//     }else {
//         return "строка 1 меньше строки 2 ";
//     }
// };
// console.log(comparison(str1, str2));


// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.
// let str1="Каждый охотник желает знать";
// function insensitive_search(str, newStr) {
//     // str=newStr.toLowerCase();   
//    return str.match(newStr)  ;
// };
// console.log(insensitive_search(str1,/ЗНАТЬ/gi));
