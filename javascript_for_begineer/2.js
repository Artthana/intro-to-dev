const myName = 'Wongsathorn Art';  
let height = 175;
let isMale = false;
let city;
let city2 = null;
let bigNumber = 10n;

console.log(myName,height,isMale,city,city2,bigNumber);

// ประกาศตัวแปรแบบ oject
const person = {
    name: 'Wongsathorn',
    height: 175,
    city: "Bangkok"
};

console.log(person);
console.log(person.name);

person.height = 180;
console.log(person);

// เพิ่ม object ไปได้เลย
person.weight = 70;
console.log(person);


//array
const numbers = [5,10,15,20];
console.log(numbers);
console.log(numbers[2]);
// เพิ่ม array ต่อท้าย
numbers.push(25);
console.log(numbers);
// ลบ array หลังสุด
numbers.pop();
console.log(numbers);
// ลบ array ตัวหน้า
numbers.shift();
console.log(numbers);