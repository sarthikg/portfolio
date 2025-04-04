---
slug: "template-method-pattern"
title: "Template-Method Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Template-Method Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/7ocpwK9uesw?si=DxSTXhTDvRj90Lwj"
---

### Problem Statement

- Consider a scenario where we are creating some kind of a framework that can be used by the client-code. This framework shall allow client-code to implement a few methods according to their preferences. Imagine a case like the Angular Framework. Here, the framework allows the client to implement methods like `ngOnInit` , `ngOnChanges`, etc.
- But, the framework code controls the order in which these methods are called, and the operations that are called between these method calls. Hence, client should have the opportunity to decide if they want to implement either of these methods, and if they want to implement these methods, what should go in these.

### Solution

- There could be the following possible solutions:
  1.  Use the Strategy Pattern where the client-code can pass the strategies for each of the missing slot to the framework.
  2.  Use the Template Method Pattern where the client-code can extend the framework class & code the logic in these methods.
- In the template method pattern, the client-code can create a new class which extends the existing class in the framework. The framework can have it as an abstract class which has implementations for a few methods with `final`, but have a few methods as `abstract` or `virtual`. The `final` method will contain the code that procedurally calls the `abstract` or the `virtual` methods.

> `abstract` methods are the one’s which don’t have any implementation in the base class & the subclasses are required to override these.

> `virtual` methods are the one’s which have an implementation body in the base class & the subclasses are not required to override these.

> `final` methods are the one’s which have an implementation body in the base class & the subclasses cannot override these.

### Solution (Example based)

```tsx
abstract class Component {
	final initialise(): void {
		// Does something
		this.ngOnInit();
		// Does something else
		this.ngOnChanges();
		// Does something totally else
	}

	abstract ngOnInit(): void {}
	abstract ngOnChanges(): void {}
}

class Button extends Component {
	override ngOnInit(): void {
		console.log("This is from ngOnInit")
	}

	override ngOnChanges(): void {
		console.log("This is from ngOnChanges")
	}
}
```

In the above example, the component has the `initialise()` method which internally calls the `ngOnInit()` & `ngOnChanges()` . The client can decide to implement either of these methods if required, and if they do, they have the control on the code that they want to execute inside these.

### How it solves?

Template Method pattern allows for creation of frameworks in its primary form. Creators can decide the overall architecture, and let the clients fill in the slots.

### Pros

1. Improves code reusability as common steps & procedures are implemented in the base template.
2. Provides flexibility to the subclasses to implement their own implementations of certain steps.
3. Enforces code-consistency as all subclasses have to implement a fixed structure.
4. Provides “Extension without Modification”, as new subclasses can be created without requiring any changes in the existing codebase.

### Cons

1. Uses Inheritance. This limits the option to extend other base-class implementations in case the language doesn’t support multiple inheritance.
2. Maintenance Overhead. Incase we require changes in the base-class, all the sub-classes will require modifications.
