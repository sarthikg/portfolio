---
slug: "null-object-pattern"
title: "Null-Object Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Null-Object Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/rQ7BzfRz7OY?si=WQQOkEO07j-QKmre"
---

### Problem Statement

- In cases where we have to assign a value of `null` to something, there is always a scenario where we have to explicitly check if the value is `null`, and only proceed with the function if its not, because if the value is `null`, accessing methods or properties on that object could lead to null error.
- Ideally, we should have a better way of structuring our code such that we don’t have to check if a value is `null` or not. This is again a classic example of replacing conditional with polymorphism.

### Solution

The Null-Object Pattern says that instead of assigning a value of `null`, we should assign an instance of **NullObject**.

### Solution (Example based)

```tsx
interface Animal {
	speak(): string {}
}

class Dog implements Animal {
	speak(): string {
		return "Huff!"
	}
}

class Cat implements Animal {
	speak(): string {
		return "Meow!"
	}
}

class NullAnimal implements Animal {
	speak(): string {
		return ""
	}
}
```

- In the above example, we have an `Animal` Interface which is implemented by different types of animals like `Dog`, `Cat`, etc. But in the client-code there can be a case where there is no animal that is assigned.
- In that case, rather than having a value of `null`, we can have a value of `NullAnimal` , since this `NullAnimal` implements the same `Animal` interface, hence accessing methods/properties on this `NullAnimal` will be similar as it would be with any animal. Hence, we reduce conditionals with the help of polymorphism.

### How it solves?

A `NullObject` can have the same interface as that of the possible values that could be assigned to that variable. This makes sure that we can handle the null scenarios in it, while also preventing to add multiple conditional checks across the codebase.

### Pros

1. **Avoiding Null References** - It helps in preventing null-pointer exceptions in the codebase which are a common source of crashes.
2. **Improves Code Reliability** - The pattern helps in reducing the risk of errors & exceptions, making the codebase much more reliable.
3. **Simplified Error Handling** - With this pattern, we don’t have to perform explicit checks for nulls, hence reducing conditionals & simplifying error handling.
4. **Easy Integration** - Since null-objects conform the same interface & methods as the concrete interface, it is easier to introduce null-objects in an existing codebase.

### Cons

1. **Potential Hidden Bugs** - It could be that a method returns a null-object, it might prevent in debugging scenarios in which that method should not have returned the null-object.
2. **Increased Memory Usage** - Frequent creations of null-objects can lead to small memory overhead, though its usually minimal & acceptable.
3. **Limited Applicability** - This pattern cannot be introduced in cases where more specific error handling is required.
4. **Not-a-one-size-fits-all Solution** - This pattern is not suitable in all cases. Its only useful in cases where the default implementation is required.
