// Object literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    }
}
console.log(person.address.city);

//Destructuring

const {firstName, lastName, address: { street }} = person;
console.log(street);

//Properties 

person.email = 'elvis3muresan@yahoo.com';
console.log(person);

//Arrays

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: false
    },
    {
       id:2,
       text: 'Meet with friends',
       isCompleted: true 
    },
    {
        id: 3,
        text: 'Work hard',
        isCompleted: true
    }
]
console.log(todos[1].isCompleted);

//Json is a data format and it's used within full stack development

const todosJSON =JSON.stringify(todos);
console.log(todosJSON);

//For

for(let i = 0; i <= 10; i++)
{
    console.log(`For Loop Number: ${i}`);
}

//While

let i = 0;
while(i <= 10)
{
    console.log(`While loop number: ${i}`);
    i++;
}

//How to loop through arrays

for(let todo of todos)
{
    console.log(todo.isCompleted);
}

//High order array methods:
// 1. forEach

todos.forEach(function(todo)
{
    console.log(todo.text);
});

// 2. Map

const todoid = todos.map(function(todo)
{
    return todo.id;
});
console.log(todoid);

// 3. Filter

const todoisCompleted = todos.filter(function(todo)
{
    return todo.isCompleted == true;
}).map(function(todo)
{
    return todo.text;
})
console.log(todoisCompleted);

// Conditionals 

const x = 10;

if(x < 10)
{
    console.log('x is less then 10');
}
else if(x > 10)
{
    console.log('x is greater than 10');
}
else
{
console.log('x is equal to 10');
}

const e = 9;

const color = e > 10 ? 'red' : 'blue';
console.log(color);

switch(color)
{
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
}

//Functions

function addNums(num1 = 1, num2 = 2)
{
    return num1 + num2;
}
console.log (addNums(5, 9));

//OOP(Object Oriented Programming)
//Construction function(First method)

function Person (firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this. dob = new Date(dob);
    
    Person.prototype.getBirthYear = function()
    {
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName = function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instatiate object

const person1 = new Person('Elvis', 'Muresan', '03-05-1998');
const person2 = new Person('Mihaela', 'Dragusin', '30-08-2001');

console.log(person2.getBirthYear());
console.log(person1.getFullName());
console.log(person1);

//Class methods(Second method)

class Persons
{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear()
    {
        return this.dob.getFullYear();
    }
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person3 = new Persons('Ervin', 'Muresan', '17-8-2001');
const person4 = new Persons('Evelin', 'Muresan', '21-04-1999');

console.log(person3.getFullName());
console.log(person4);

