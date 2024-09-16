---
slug: "builder-pattern"
title: "Builder Design Pattern"
description: "Builder pattern provides a cleaner way to initialised complex objects. It makes sure that initialisation of these objects is readable, while at the same time maintainable with separation of concerns."
date: 2024-09-16
image:
  {
    src: "/src/assets/images/article/builder-pattern.webp",
    alt: "Image of Builder Pattern",
  }
tags: ["Low Level Design", "Creational Design Pattern"]
featured: false
---

### Problem Statement

- Consider a scenario where we have a complex object to be initialised. This object might require like 8-9 properties to initialise with. Now, some of these properties can have similar types, while some of them can be optional, while others might be required, or optional with a default value. It becomes difficult for the clients to initialise such objects.
- Moreover, even if the client goes about & initialises the object, it becomes a nightmare to maintain such objects. This is because, due to multiple parameters passed to the constructor, it becomes hard to see which property means what.

### Solution

- One way to solve this issue is to use the Builder Pattern. According to the builder pattern, we create a new object, i.e. the builder object. We allow users to set parameters on this builder object using methods, and there is a `build` method in the end which finally creates a new person object using the already set properties & returns it.
- It is to note that the interim methods that are used to set properties are designed such that those methods have the following structure (somewhat, and not exactly):
  1.  Do some data-validation. Make sure the value that is being set is valid.
  2.  Set the value to the builder object’s property
  3.  Return the instance of self, i.e. instance of itself.

#### Approaches

There’s a few other ways one can solve this problem:

1.  Instead of accepting individual values, we can accept an object of values & provide an interface for the user to adhere.

    - **Pros:**

      1. Straightforward approach as all required params can be passed at once. Its usually a good option for simpler objects with a small number of parameters.
      2. Less code overhead as passing parameters directly through an interface may involve less code & be more concise.

    - **Cons:**

      1. Assigning default values to optional parameters will require its own set of circus.
      2. Validating parameters individually would again require its own set of circus.
      3. Step-by-step construction as provided by builder pattern makes the whole process of building the object intuitive for the clients.
      4. Builder method provides a way of creating immutable objects, but in this case, clients can modify the object passed at initialisation which might lead to unexpected issues.

2.  Instead of creating a builder object, we can create new methods on the product class itself for setting the properties.

    - **Pros:**

      1. Straightforward approach compared to the builder pattern, atleast for objects with relatively less number of parameters.
      2. Less code overhead as builder class is not required.

    - **Cons:**

      1. Separation of concerns is lost. Builder pattern offers a way to separate the logic for initialisation with the actual logic of the product.
      2. Immutability is completely lost. Builder pattern provides a way for clients to set parameter values until the `build` method is called. Once the build method is called, they get an immutable instance of the product. Such an implementation is not possible here.

#### Implementation Details

- Builder Pattern can have varied levels of implementations based on the following:

  - When is the builder pattern being introduced in the feature lifecycle
  - What’s the level of re-use for the product object’s creation

- If the builder pattern is introduced at the design phase itself, the pattern can be introduced to its complete extent. In the form of builder pattern, the following happens:

  - Client interacts with the builder class.
  - Builder class has a `build()` method which the clients finally call to get an instance of the Product.
  - Internally, the builder object passes itself to the product class when initialising it.
  - The product class is configured such that it accepts the builder object in its constructor & picks the required parameters from it.

- If the builder pattern is introduced at a later stage, we might just be able to refactor the product class, or to make the following adjustments to the builder class
  - In the `build()` method of the builder class, we can create a new instance by passing each parameter from the builder object into the constructor of the product class.
- If the product creation is being duplicated at multiple places across the codebase:
  - We can introduce an optional `Director` class. This director class will abstract away the logic for creating new instances of the product.
  - Director class can have multiple methods which each return different configurations of the product. These methods might use a similar builder with different parameter values, or they might use different builders.

### Solution (Example based)

```tsx
class Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    email: string,
  ): void {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.email = email;
  }
}

const person = new Person(
  "Sarthik",
  "Gupta",
  24,
  "152, Sector 15",
  "sarthikg@icloud.com",
);
// At this moment, creating a person is already less intuitive
// Imagine if we add more properties to the person object

class PersonBuilder {
  constructor(firstName: string, lastName: string): void {
    // Accept all the required properties in the constructor
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Define methods for setting the optional properties

  setAge(age: number): void {
    this.age = age;
    return this;
  }

  setAddress(address: string): void {
    this.address = address;
    return this;
  }

  setEmail(email: string): void {
    this.email = email;
    return this;
  }

  build(): void {
    return new Person(this);
  }
}

const person = new PersonBuilder("Sarthik", "Gupta")
  .setAge(24)
  .setAddress("152, Sector 15")
  .setEmail("sarthikg@icloud.com")
  .build();
// In this case, intialisation of the person is much more readable.
```

### How it solves?

- Builder pattern provides a cleaner way to initialised complex objects. It makes sure that initialisation of these objects is readable, while at the same time maintainable with separation of concerns.
- Builder pattern also allows for a way to extend its usage with the use of a Director. The director helps us in creating new instances of the product in a predictable manner, and re-use the logic for building these products across the codebase for consistency.

### Pros

1. **Flexible Construction** - It allows for a flexible & step-by-step construction of complex objects.
2. **Fluent Interface** - It offers a fluent interface in a way that it allows for method chaining.
3. **Parameter Validation** - Builders can validate parameters as they are set.
4. **Default Values** - Builders can set default values for parameters which are optional
5. **Immutability** - They allow for creating immutable product objects as once the object is created, it’s immutable in nature.
6. **Separation of Concerns** - It helps in separating the construction process from the product class. This separation makes the code more maintainable & modular.
7. **Readability** - Builder pattern offers better readability when setting parameter values incase of complex object initialisation.
8. **Code Reusability** - Using directors, initialisation logic can be reused across the codebase.

### Cons

1. **Boilerplate Code** - Implementing the builder pattern requires some boilerplate for builder class, as well as for the setter methods of each attribute.
2. **Complexity for Simple Objects** - For simple objects with few attributes, builder pattern is an overkill.
3. **Increased number of classes** - When using builder pattern, we introduce additional classes in our codebase. This adds an overhead for the number of classes that needs to be maintained.
