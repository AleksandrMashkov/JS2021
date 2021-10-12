// let start = 1800;
// let periud = 0;
// while (start < 2020) {
//   start += 4;
//   if (start === 1900) continue;
//   periud += 1;
// }
// console.log(periud);

// let start = 1800;
// let periud = 0;
// while (start < 2020) {
//   start++;
//   periud += 1;
//   if (start === 1961);
//   {

// }
// console.log(periud);

// for (start = 1800; start <= 2020; start++) {
//   if (start === 1900) {
//     break;
//   }
//   console.log("Число start  равно " + start);
// }

// console.log("рекомендация о погоде");
// let temp = 37;
// if (temp < -30) {
//   console.log(temp, "останьтесь дома");
// } else if (temp < -30 || temp <= -10) {
//   console.log(temp, "сегодня холодно");
// } else if (temp < -10 || temp <= 5) {
//   console.log(temp, "сегодня не холодно");
// } else if (temp < 5 || temp <= 15) {
//   console.log(temp, "Сегодня тепло");
// } else if (temp < 15 || temp <= 25) {
//   console.log(temp, "Сегодня очень тепло");
// } else if (temp < 25 || temp <= 35) {
//   console.log(temp, "Сегодня жарко");
// } else {
//   console.log(temp, "Сегодня пекло");
// }
// console.log("finish");

// Работа с if-else +тернарный оператор
// console.log(
//   "Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'"
// );
// let a = 1;
// if (a === 0) {
//   console.log(a, "верно");
// } else {
//   console.log(a, "неверно");
// }
// console.log("finish");

// console.log(
//   "Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'"
// );
// let b = -3;
// let resul = b > 0 ? "верно" : "неверно";
// console.log(b, resul);
// console.log("finish");

// console.log(
//   "Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно"
// );
// let c = 3;
// if (c < 0) {
//   console.log(c, "верно");
// } else {
//   console.log(c, "неверно");
// }
// console.log("finish");

// console.log(
//   "Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'"
// );
// let d = -1;
// let result = d >= 0 ? "верно" : "неверно";
// console.log(d, result);
// console.log("finish");

// console.log(
//   "Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'"
// );
// let i = 5;
// if (i <= 0) {
//   console.log(i, "верно");
// } else {
//   console.log(i, "неверно");
// }
// console.log("finish");

// console.log(
//   "Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'"
// );
// let f = -1;
// let result = f != 0 ? "верно" : "неверно;";
// console.log(f, result);
// console.log("finish");

// console.log(
//   "Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'"
// );
// let g = "test";
// const t = "test";
// if (g == t) {
//   console.log(g, "верно");
// } else {
//   console.log(g, "неверно");
// }
// console.log("finish");

// console.log(
//   "Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'.'"
// );
// let i = "1";
// const g = "1";
// if (i === g) {
//   console.log(i, "верно");
// } else {
//   console.log(i, "неверно");
// }
// console.log("finish");

// Работа с логическими переменными

// console.log(
//   "Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'"
// );
// let test = 0;
// if (test == true) {
//   console.log(test, "верно");
// } else {
//   console.log(test, "неверно");
// }
// console.log("finish");

// let test = false;
// let result = test == true ? "верно" : "неверно";
// console.log(test, result);
// console.log("finish");

// let test = true;
// let result = test != true ? "верно" : "неверно";
// console.log(test, result);
// console.log("finish");

// console.log(
//   "Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'"
// );
// let a = 7;
// if (a > 0 && a < 5) {
//   console.log(a, "верно");
// } else {
//   console.log(a, "неверно");
// }
// console.log("finish");

// console.log(
//   "Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран."
// );
// let a = 100;
// if (a == 0 || a == 2) {
//   a += 7;
//   console.log(a);
// } else {
//   a /= 10;
//   console.log(a);
// }
// console.log("finish");

// console.log(
//   "Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,иначе выведите их разность (результат вычитания)."
// );

// let a = 3;
// let b = 5;
// if (a <= 1 && b >= 3) {
//   a += b;
//   console.log(a);
// } else {
//   a -= b;
//   console.log(a);
// }
// console.log("finish");

// console.log(
//   "Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'."
// );

// let a = 1;
// let b = 5;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log(a, b, "верно");
// } else {
//   console.log(a, b, "неверно");
// }
// console.log("finish");

// console.log(
//   "Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'."
// );
// let a = 3;
// let b = 6;
// let result = (a > 2 && a < 11) || (b >= 6 && b < 14) ? "верно" : "неверно";
// console.log(a, b, result);

// console.log(
//   "Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case."
// );
// let num = 6; // введи значение от 1..4
// switch (num) {
//   case 1:
//     console.log("Зима");
//     break;
//   case 2:
//     console.log("Весна");
//     break;
//   case 3:
//     console.log("Лето");
//     break;
//   case 4:
//     console.log("Осень");
//     break;
//   default:
//     console.log("такого значения нет");
// }
// console.log("finish");

// console.log(
//   "В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью)."
// );
// let day = 2;
// if (day >= 1 && day <= 10) {
//   console.log(day, "первая декада месяца");
// } else if (day >= 11 && day <= 21) {
//   console.log(day, "вторая декада месяца");
// } else if (day >= 22 && day <= 31) {
//   console.log(day, "третя декада месяца");
// } else {
//   console.log(day, "нет такого дня, введите значение от 1-31");
// }
// console.log("finish");

// console.log(
//   "В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень)."
// );
// let month = 1; //укжите месяц от 1..12
// if (month === 12 || month <= 2) {
//   console.log("сейчас зима");
// } else if (month >= 3 && month <= 5) {
//   console.log("сейчас весна");
// } else if (month >= 6 && month <= 8) {
//   console.log("сейчас лето");
// } else if (month >= 9 && month <= 11) {
//   console.log("сейчас осень");
// } else {
//   console.log(month, "нет такого масяца");
// }
// console.log("finish");

// console.log(
//   "Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'"
// );
// let stroka = "abcd";
// if (stroka[0] == "a") {
//   console.log("да");
// } else {
//   console.log("нет");
// }
// console.log("finish");

// console.log(
//   "Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет"
// );
// let num = "42345";
// if (num[0] == "1" || num[0] == "2" || num[0] == "3") {
//   console.log("да");
// } else {
//   console.log("нет");
// }
// console.log("finish");

// console.log(
//   "Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий"
// );
// let str = "123";
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// console.log(sum);

// console.log(
//   " Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет"
// );

// let str = "123123";
// let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// if (sum1 == sum2) {
//   console.log(sum1, sum2, "ДА равны");
// } else {
//   console.log(sum1, sum2, "НЕТ не равны");
// }
// console.log("finish");

// console.log(" Выведите столбец чисел от 1 до 100.");
// let i = 1;
// for (; i <= 100; i++) {
//   console.log(i);
// }
// console.log("finish");

// console.log("Выведите столбец чисел от 11 до 33.");
// for (i = 11; i <= 33; i++) {
//   console.log(i);
// }
// console.log("finish");

// console.log("Выведите столбец четных чисел в промежутке от 0 до 100.");
// let i = 0;
// for (; i <= 100; i += 2) {
//   console.log(i);
// }
// console.log("finish");

// console.log("С помощью цикла найдите сумму чисел от 1 до 100");
// let summ = 0;
// for (i = 0; i <= 100; i++) {
//   summ += i;
// }
// console.log(summ);

// let mass = [1, 2, 3, 4, 5, 6, 7];
// for (i = 0; i < mass.length; i++) {
//   console.log(mass[i]);
// }
// console.log("finish");

// let result = 0;
// let mas = [1, 2, 3, 4, 5];
// let i = 0;
// for (; i < mas.length; i++) {
//   result += mas[i];
// }
// console.log(result);
// console.log("finish");

// console.log(
//   "Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10."
// );

// let mass = [2, 5, 9, 15, 0, 4];

// for (i = 0; i < mass.length; i++) {
//   if (mass[i] > 3 && mass[i] < 10) {
//     console.log(mass[i]);
//   }
// }

// console.log(
//   "Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива."
// );
// let mass = [1, 2, -3, -4, 5, -6, 1];
// let result = 0;
// for (i = 0; i < mass.length; i++) {
//   if (mass[i] > 0) {
//     result += mass[i];
//   }
// }
// console.log(result);

// console.log(
//   "Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо."
// );
// let mass = [1, 2, 4, 5, 5, 6, 7, 8, 9, 10];
// for (i = 0; i < mass.length; i++) {
//   if (mass[i] === 4) {
//     console.log("Есть");
//     break;
//   }
// }
