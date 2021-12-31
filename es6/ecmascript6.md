
# ECMA script 6
 

ECMAScript (ES) is a scripting language specification created to standardize JavaScript.

The Sixth Edition, initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015, adds significant new syntax for writing complex applications, including classes and modules, iterators and for/of loops, generators, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies.

In other words, ES6 is a superset of JavaScript (ES5). The reason that ES6 became so popular is that it introduced new conventions and OOP concepts such as classes.

# var and let

In ES6 we have three ways of declaring variables:

```
var a = 10;
const b = 'hello';
let c = true;
```

The type of declaration used depends on the necessary **scope**. Scope is the fundamental concept in all programming languages that defines the visibility of a variable.

Unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope, let allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.

### basic let
```
if (true) {
	let name = 'Jack';
}
alert(name);
```