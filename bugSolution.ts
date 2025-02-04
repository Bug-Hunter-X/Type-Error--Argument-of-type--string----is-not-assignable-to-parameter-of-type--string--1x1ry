function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Alice", "Bob"];

// Solution 1: Iterate through the array and call greeter for each element
user.forEach(name => {
  console.log(greeter(name));
});

//Solution 2: Modify the function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}
console.log(greeterArray(user));
//Solution 3:Use single element
console.log(greeter(user[0]));