// console.log(this);
// // console.log(global);
// var name = "Alex";
// function example() {
// 	console.log(this);
// }
// example();
// console.log();????


// const user ={
//     name: "Alex",
//     age: "25",
//     getName: function(){
//         console.log(this.name);
//     },
// };
// user.getName()

// function getName() {
//     console.log(this.name);
// }
// function setName(newName) {
//     this.name = newName;
// }
// const user ={
//     name: "Alex",
//     age: "25",
//     getUserName: getName,
//     setUserName: setName,
// };
// user.getUserName();

// const admin ={
//     name: "Max",
//     age :"45",
//     getAdminName: getName,
//     setAdminName: setName,
// };

// user.getUserName();
// admin.getAdminName();

// console.log(user);
// user.setUserName("Ira");
// user.setUserName();
// console.log(user);

// const town ={
//     townName: "Moskva",
//     Population: "25 mln",
//     gettownName: function(){
//         return this.townName
//     },
//     getPopulation: function(){
//         return this.Population
//     },
    
// setSomeValue: function(key,value){
//     this[key] = value;
// }
// };
// console.log(town);
// town.setSomeValue("townName","Paris");
// town.setSomeValue("Population"," 9 mln");
// console.log(town);
   
// var arr = [6, 8, 1, 4, 9, 9, 5, 3, 0, 2, 7];
// function sumSeven(numbers){
//     return numbers.map((el)=>`(${el}:${9-el})`)
//     .filter((el,i,arr)=>i<arr.length/2);
// }
// console.log(sumSeven(arr));

$.get('/action.php', {query: 'test'}, function(data) { 
    console.log(data); // ответ от сервера
})
.success(function() { console.log('Успешное выполнение'); })
.error(function(jqXHR) { console.log('Ошибка выполнения'); })
.complete(function() { console.log('Завершение выполнения'); });


