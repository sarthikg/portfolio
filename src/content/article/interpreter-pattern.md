---
slug: "interpreter-pattern"

title: "Interpreter Design Pattern"
description: "This pattern allows for interpreting expressions, where expressions can be regexes, mathematical calculation, or even a sentence"
date: 2023-12-24
image:
  {
    src: "/src/assets/images/article/browsers.png",
    alt: "Image of Browser Icons",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
---

### Problem Statement

Consider a scenario where we need a function that can interpret an expression. This expression can either be like a regex, a mathematical calculation, or maybe even a sentence.

### Solution

- Interpreter Pattern is a possible solution that can be used. According to this pattern, we have an `expression` interface, which is implemented by multiple concrete expressions. Each of these concrete expressions have an `interpret()` method that checks if the `context` passes the interpretation.
- There are a few different types of expressions:
  1.  Terminal Expressions - checks for a literal character
  2.  Sequence Expressions - checks for a sequence of characters
  3.  Alternation Expressions - checks for a logical OR condition for characters
- There can be other types for expressions as well, like the one for logical AND, etc. All these expressions are built on top of other expressions, and all of them end with terminal expressions.
- Interpreter pattern can be thought of as a tree of expressions, where each expressions might contain other expressions, but, the leaf nodes of the tree are the one that actually validate it, which in this case are the terminal expressions.

### Solution (Example based)

```tsx
class Context {
	constructor(input: string): void {
		this.input = input
		this.position = 0
	}

	getCurrentChar(): string {
		return this.input[this.position]
	}

	nextChar(): void {
		this.position += 1
	}
}

interface Expression {
	interpret(context: Context): boolean {}
}

class TerminalExpression implements Expression {

	character: string = null;

	constructor(character: string): void {
		this.character = character
	}

	interpret(context: Context): boolean {
		return context.getCurrentChar() === this.character
	}
}

class AlternationExpression implements Expression {

	exp1: Expression = null;
	exp2: Expression = null;

	constructor(exp1: Expression, exp2: Expression): void {
		this.exp1 = exp1
		this.exp2 = exp2
	}

	interpret(context: Context): boolean {
		const currentChar = context.getCurrentChar()
		return this.exp1.interpret(currentChar) || this.exp2.interpret(currentChar)
	}

}

// Client Code
const checkAOrB = new AlternationExpression(
	new TerminalExpression("A"),
	new TerminalExpression("B")
)

const result1 = checkAOrB.interpret("Check for this.")
console.log(result1) // false

const result2 = checkAOrB.interpret("A")
console.log(result2) // true
```

### How it solves?

It provides us a way of interpreting expressions in a way that’s manageable & splits the responsibility of validation across classes.

### Pros

1. **Flexible for Language Processing** - It is highly effective for creating interpreters for domain-specific languages (DSL’s) or for processing textual based data.
2. **Modular & Extensible** - It allows us to add new expressions & language constructs by creating new classes that implement the expression interface.
3. **Separation of Concerns** - There’s a clear separation between the grammar of the language & the interpretation logic.
4. **Reusability** - Expressions & interpreters can be reused across different parts of the application relying on the same DSL.

### Cons

1. **Complexity** - This can introduce a lot of complexity for languages with intricate grammar. Building complex expressions, especially non-terminal one’s & handling their interactions can become challenging.
2. **Limited Optimisation** - In some cases, this pattern might not be the most optimised way of processing languages. Compilers & code-generators which convert the source language into a more efficient intermediate language might be a better option.
3. **Learning Curve** - Understanding & implementing the Interpreter pattern may require a solid grasp of language theory & parsing techniques.
