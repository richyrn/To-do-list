
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {

    let post = person[x];
    console.log(post)
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  let post = numbers[x];
  console.log(post)
}
 