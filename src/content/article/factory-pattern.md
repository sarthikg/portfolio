---
slug: "factory-pattern"
title: "Factory Design Pattern"
description: "Factory pattern provides a consistent place to store the logic for initialization of the class instances. This logic can then be reused across the codebase, while it also abstracts away the dependencies that are required to be injected when creating instances of the products"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/factory-pattern.png",
    alt: "Image of Factory Pattern",
  }
tags: ["Low Level Design", "Creational Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/EcFVTgRHJLM?list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc"
---

### Problem Statement

- Consider a case where either of multiple products can be initialised based on some conditions or checks. This type of product initialisation is common, and might just be required at multiple places across the codebase. Now, what are the possible ways to go about this?
  1. Duplicate the logic for initialisation at multiple places across the codebase?
  2. Create a utility function that helps in initialising the correct product instance?
- The first way of solving this problem is a big no-no! If the initialisation logic is similar, and requires changes in the future, the changes will have to be made at multiple places. If not done correctly, this can lead to problems.
- The second way of solving this problem is better than the first approach, but that diverges from the object oriented programming. So, instead of having a dangling utility function, we can create it as a method in a new class. This will work well in most cases, but this lacks scalability. Imagine if a new piece of logic is required to conditionally create these products?

### Solution

- A solution to such a problem is to create multiple factories. Each factory will house the logic which decides the product for which an instance needs to be created & returned. Here, the client should be able to swap out the factories & also reuse the factories.
- So, ideally what is happening is that these factories include all the logic that is required to create objects from the product classes. This can include the following:
  1. Deciding which product to create
  2. Handle the logic needed for creating an instance of the product
  3. Pass the required dependencies to the class for creating a product
- Also, all the products share a similar interface & also all the factories share a similar interface. This helps in switching the factory as well as the receiving a dynamic product possible at runtime.

### Solution (Example based)

```tsx
// Classes for the Product
interface Product {
  description: string;

  constructor();
}

class Dog implements Product {
  description = "Dog";

  constructor() {}
}

class Cat implements Product {
  description = "Cat";

  constructor() {}
}

// Classes for the Factories
interface Factory {
  getProduct(probability: number): Product;
}

class RandomFactory implements Factory {
  getProduct(probability: number): Product {
    // Logic for deciding which product to return
    if (probability > 0.5) return new Dog();
    return new Cat();
  }
}

class AnotherFactory implements Factory {
  getProduct(probability: number): Product {
    // Logic for deciding which product to return
    if (probability > 0.8) return new Dog();
    return new Cat();
  }
}

// Client-Side Initiation
const factory: Factory = 2 > 1 ? new RandomFactory() : new AnotherFactory();
const product = factory.getProduct(0.25);
```

### How it solves?

- Using a factory pattern provides a consistent place to store the logic for initialization of the class instances. This logic can then be reused across the codebase, while it also abstracts away the dependencies that are required to be injected when creating instances of the products.
- Apart from that, it also provides us a way to have multiple initialising logics as multiple concrete implementations of these factories. Any of these factories can be used by the clients.

### Pros

1. **Encapsulation of Object Creation** - This pattern hides the details of how objects are created, making it easier to maintain and extend the code.
2. **Code-Reusability & Maintenance** - By centralizing object creation in a factory class, the code becomes more modular.
3. **Flexibility in choosing objects** - This pattern makes it easy to extend or change the type of objects being created without affecting the client code.
4. **Promotes the open/close principle** - Since this pattern allows for creation of objects through a single interface, it can be extended without modifying the existing client code.
5. **Reduces code-duplication** - Instead of duplicating the logic for object creation at multiple places, it is centralized in a factory class.

### Cons

1. **Increased complexity** - This pattern introduces additional layers of abstraction, which can make the code more complex, especially in simpler applications where object creation is straightforward.
2. **Not always necessary** - For small and simple projects, using Factory pattern may just be a overkill. If the object creation isn't complex, or doesn't change often, introduction of factory is usually not required.
3. **Tight coupling with Factory** - While the client is decoupled from the specific product class, it is tightly coupled to the factory interface. If the factory needs to be changed significantly, the client code may require some modification as well.
