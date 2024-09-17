---
slug: "facade-pattern"
title: "Facade Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Facade Pattern",
  }
tags: ["Low Level Design", "Structural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/K4FkHVO5iac?si=DMSAAG0HxeXhCm7J"
---

### Problem Statement

- In a system that follows single-responsibility principle, there usually ends up a lot of classes that individually do very small things. In such a system, to do any meaningful, usually a lot of plumbing is required. This means, a class might have 5 dependencies it needs to be injected in it, and this class might be used by another class that might have 3-4 additional similar classes required in its constructor.
- In such an example, its usually not long when initialising a class to do something meaningful requires like 10+ dependencies to be injected. Usually such systems are well-designed systems since the individual bits and pieces can be accumulated to achieve much more functionality than it was initially designed for.
- But, the problem is that, for client code to use these classes, it gets really complicated for them to understand and do all this plumbing.

### Solution

- This is where the facade pattern comes into the picture. Usually facade pattern is borderline considered a pattern at all, since all it is doing is hiding complex initialisation of classes from the client-code.
- Facade is a class whose functionality is to do plumbing for these classes & return an instance of them to the client-code through method calls on it.

### Solution (Example based)

```tsx
class Product1 {
  constructor(): void {}
}

class Product2 {
  constructor(a: Product1): void {}
}

class Product3 {
  constructor(a: Product2, b: Product1): void {}
}

class Facade {
  getProduct3(): Product3 {
    const product1 = new Product1();
    const product2 = new Product2(product1);
    return new Product3(product2, product1);
  }
}
```

### How it solves?

Facade pattern hides the dependencies & the logic for plumbing required to initialise a class instance from the client-code, and provides them simple methods. This also makes sure the logic for initialisation is reusable in the application.

### Pros

1. Provides a simplified interface for the client-code to interact with.
2. Promotes abstraction by hiding complex logic from client-code.
3. Improves maintainability by isolating internal components from the client-code. This makes changes easier.
4. Reduces coupling between the client-code & the internal sub-system.

### Cons

1. Limits the customisation that can be done by the client-code.
2. Adds additional layer of abstraction which can add maintenance overhead.
3. If not designed carefully, facade can quickly become very bloated by becoming large & complex.
