function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

console.log(p1.age);
console.log(p2.name);
