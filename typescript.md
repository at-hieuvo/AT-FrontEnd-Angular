## TYPESCRIPT AND ES6
### TYPESCRIPT
#### 1.What is TypeScript and Why do we need it?
**Typescript **is an open sourced programming language that is developed and being maintained by Microsoft. It is more or less like a wrapper for javascript. It brings strict validations, code intellisense and oops to javascript. The developers doesn't have to write anything in javascript, they only have to typescript. However on the compilation typescript produces javascript as it output.
**Features of using typescript:**
- Strict validation 
- Code intellisense like any other programming language
- OOPs concept with javascript!
- Inheritance
- Enum and Interfaces
- Modules & Classes
- Access modifiers
- Polymorphism
- Quite easy to learn and use for developers 
- Free and open source
#### 2.How can you get TypeScript and install it?
**Install TypeScript**
```bash
npm install -g typescript
```
For our nightly builds:
```bash
npm install -g typescript@next
```
Check version
```bash
tsc -v
```
#### 3.How do you compile TypeScript files?
To compile all the .ts files in the current directory
```bash 
tsc *.ts
```
You want to compile file 
```bash
tsc filename1.ts filename2.ts
```
#### 4.Which Object Oriented terms are supported by TypeScript? Write an example.
- Modules
- Classes
- Interfaces
- Data Types
- Member functions
**Example:**
```bash
class Animal {
    name: string;
    constructor(notice: string) {
        this.name = notice;
    }
    nameAnimal() {
        return "Hi " + this.name;
    }
}

var dog = new Animal("dog");
```
#### 5.How do you implement inheritance in TypeScript? Write an example.
we can use common object-oriented patterns. Of course, one of the most fundamental patterns in class-based programming is being able to extend existing classes to create new ones using inheritance.
```bash
class People {
	name:string;
	age:number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	} 
	notice() {
		return "Hello" + this.name + this.age;
	}
}
class Student extends People {
	constructor(name: string, age: number){
		super(name, age);
	}
}
var student = new Student("Hieu", 22);
console.log(student.notice());	
```
### II. ES6
#### 1.Block scope variable
```bash
function foo() {
   let x = 10;
   if (true) {
      let x = 20; 
      console.log(x); 
   }
   console.log(x); 
}
```
#### 2.Template Literals
```bash
var animal = "dog";
function dogWork() {
	return "Gau Gau";
}
console.log(`${animal} speak ${dogWork()}`);

```
#### 3.Multi-line strings
```bash
var singer = 'Truong Giang
			  Hoai Linh
			  Tran Thanh';
console.log(singer);
```
#### 4.Arrow functions
```bash
var notice = (name, job) => {
	console.log("hello " + name + ",I am a " + job);
};
 notice('Hieu', 'student');
```
#### 5.For...of
```bash
let number = [10, 20, 30];

for (let value of number) {
  console.log(value);
}
```
#### 6.Default parameters
```bash

function getName(name = 'hieu')
{
    return name;
}
 
console.log(`Hello ${getName()}`);
```
