// //q1
// const person = {
//    name: "purva",
//    age: 22,
//   gender: 'f'
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

//q2
// function sq(a) {
//    return a * a;

// }
// console.log(sq(3));

// q3
// const num = [1, 2, 3, 4];
// const b = function(num) {
//    return num.map((num) => num * 2)

// }
// console.log(b(num));

// //q4
// const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const even1 = num1.filter((num1) => {
//    return num1 % 2 == 0;
// })
// console.log(even1);

// //q5
// //map to square each no
// const num4 = [1, 2, 3, 4];
// const sq = num4.map((num4) => {
//    num4})
// console.log(sq);

// //q5
// //filter to extract even no
// const num2 = [1, 2, 3, 4, 5, 6, 7];
// const even = num2.filter((num2) => {
//    return num2 % 2 == 0;
// })
// console.log(even);

// //q5
// //reduce to calculate sum of all element
// const num6 = [1, 2, 3];
// const total = num6.reduce((total, num6) => {
//    return total + num6;
// })
// console.log(total);

//q6
//array destructing
//const test = [1, 2, 3, 4];
//const [a, b, c] = test;
//console.log(a);


//q6
//object destructing
//const person = {
//    name1: "purva",
//    id: 1,
//  salary: 1234,

//}
//const { name1, id, salary } = person;
//console.log(name1 + " " + id + " " + salary);

//q7
//class Emp {
//    constructor(name, id, salary) {
//        this.name = name;
//        this.id = id;
//        this.salary = salary;

//  }
//  displayinfo() {

//    }
//}
//const emp = new Emp("purva", 44, 1234);
//console.log(emp.name);
//emp.displayinfo();

//q8 & q9
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const success = Math.random() < 0.8;
//         if (success) {
//             resolve({ message: 'data is recived' });
//         } else {
//             reject(new Error, ('error occ'));
//         }
//     })
// }
// fetchData().then((data) => {
//     console.log('success', data.message);
// }).catch((error) => {
//     console.log('error', error.message);
// })
// async function syncData() {
//     const data = await fetchData();
//     if (data) {

//         console.log(data);
//     } else {
//         console.log(not);
//     }
// }

// //q10
// let age = 20;
// try {
//    if (age < 18); {
//        throw new Error("valid");
//    }

// } catch (e) {
//    console.log(e.message);
//    console.log(e.name);

// }

// //q-11
// const ul=document.getElementById("first");
// const list=document.createElement("li");

// ul.appendChild(list);
// list.innerText="php";

// //q-12

// function na() {
//     alert("button clicked");
    
// }
// const b=document.getElementById("mybutton");
// b.setAttribute("onclick","na()");

// ====quetion.14====
// class Emp{
//     name:string;
//     id:number;
//     sal:number;
//     add:string;

//     constructor(name,id,sal,add){
        // this.name=name;
//         this.id=id;
//         this.sal=sal;
//         this.add=add;
//     }
//     displayinfo():void{
//         console.log(this.name+" "+this.id+" "+this.sal+" "+this.add);
//     }

    
// }
// const e=new Emp("vijay"1,7588598789,"xyz");
// e.displayinfo();
//


// ====quetion.16 or .15 ====
// class Emp{
//    static name:string= "vijay";
//     id:number;
//     sal:number;
//     add:string;

//     constructor(id,sal,add){
        
//         this.id=id;
//         this.sal=sal;
//         this.add=add;
//     }
//     displayinfo():void{
//         console.log(this.id+" "+this.sal+" "+this.add);
//     }
//     static display(){
//         console.log(Emp.name);
//     }
    
// }
// const e=new Emp(1,7588598789,"xyz");
// e.displayinfo();
// Emp.display();


// =====quetion.17=====
// abstract class Add{
//     name:string;
//     id:number;
//     abstract meth():void;
// }
// class A extends Add{
//     meth():void{
//         console.log("abstract class");
//     }
// }
// const b=new A();
// b.meth();


// ======quetion.18=====
// interface I{
//     meth2():void;
// }
// class V implements I{
//     meth2():void{
//         console.log("interface class");
//     }
// }
// const c=new V();
// c.meth2();

// ===quetion.19
// function meth<T>(a:T):T{
//     return a;
// }
// const s=meth<number>(10);
// console.log(s);
// const s1=meth<string|number>(12);
// console.log(s1);


    