let fullName = {
firstName: 'John',
lastName: 'Robinson', 
comb: function (){
    return this.firstName + ' ' + this.lastName
  }
}
console.log(fullName.firstName);

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log (txt.length);

let str = "Apple, Banana, Kiwi";
console.log(str.slice);

let text1 = "Hello";
let text2 = "World";
console.log(" ",text2);

let names;
names = fullName.comb;
console.log(names);

