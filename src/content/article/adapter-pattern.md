---
slug: "adapter-pattern"
title: "Adapter Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Adapter Pattern",
  }
tags: ["Low Level Design", "Structural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/2PKQtcJjYvc?si=2kUOSZmv4NDZmuvZ"
---

### Problem Statement

There can be 2 scenarios where this pattern shines:

1. Imagine a scenario where a class has an instance of another class. The former class calls the methods on the latter one & requires the latter class to inherit from an abstract class, or maybe extend from an interface such that it has a contract on the methods it wants to call on them.
2. Imagine a scenario where the codebase is relying on an external library for a certain functionality like product-analytics. We want to implement it in a way that if in future we decide to move to another analytics library, the changes should be easy.

### Solution

- In both of the above scenarios, we have class(es) which requires another class to follow a certain interface.
- In the first scenario, we have a class which might be using dependency injection to utilise functionality from another class. We might have typed an interface or an abstract class for it, and hence every concrete implementation of this class is the one that is required by the former class.
- In the second scenario, we construct a new interface first, which is the adapter in this case. Then, we want all the internal classes to use the interface of the adapter. This makes sure that if the adaptee (i.e. external library) ever has a change, we will only have to modify the adapter, and everything will be back working fine.
- Hence, adapters can be used as a pre-emptive attempt to prevent major code-refactors (as in the case of analytics example), or as a last-moment attempt to make a class somehow work with an existing class.

### Solution (Example based)

```tsx
// Interface & Concrete-Classes of the Dependencies
interface Dependency {
	request(): void {}
}

class DependencyA implements Dependency {
	request(): void {}
}

class DependencyB implements Dependency {
	request(): void {}
}

// Class of the Adaptee & the Adapter
class Adaptee {
	differentRequest(): void {}
}

class Adapter implements Dependency {
	constructor(adaptee: Adaptee) {}

	request() {
		this.adaptee.differentRequest();
	}
}

// Class of the Dependent Piece which requires Dependency Interface injected
class Dependent {
	constructor(dependency: Dependency) {}
}

// Client-Side Initiation
const dependency = oneOf(new DependencyA(), new DependencyB(), new Adapter(new Adaptee()));
const dependent = new Dependent(dependency)
```

### How it solves?

- Adapter pattern provides a way to for a class to adhere an interface even when its not designed to adhere it. This helps in polymorphism, where an adapter can be used in its place.
- Adapter pattern also helps in making sure that codebase can be agnostic of external libraries. Adapter ends up being the only component that requires changes.

### Pros

1. Helps with reusability & flexibility.
2. Client code is easier as they can just swap different classes using polymorphism.

### Cons

1. Requests are forwarded, so slight overhead.
