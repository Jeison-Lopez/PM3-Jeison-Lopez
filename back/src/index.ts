// Variable example
let greeting: string = "Hello, TypeScript!";

// Object example
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John Doe",
  age: 30,
};

// Function example
function greet(person: Person): string {
  return `Hello, ${person.name}`;
}

console.log(greeting);
console.log(greet(person));
