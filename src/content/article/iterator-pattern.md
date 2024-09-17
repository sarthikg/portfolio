---
slug: "iterator-pattern"
title: "Iterator Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Command Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/uNTNEfwYXhI?si=4qVcXMOrruJi_I-t"
---

### Problem Statement

- Consider a scenario where we have a collection of items, and for some reason, the client-code wants to iterate over these items. There can be multiple different types of collections, and the challenge is to iterate over these items in a consistent way.
- So, ideally speaking, the logic for iterating over the collection should be independent of the underlying data-structure.
- Imagine a case where there is a class of House, and this house can have multiple windows on different floors. We want to be able to iterate over all these windows. Here, the house might have a list of floor objects, and each floor might have a list of windows in it.
- Point being, the data structure representing the collection of items can be in any form, but the client should be abstracted away from this detail, and should be able to loop over windows regardless in a consistent way.

### Solution

- A solution for such a problem is to use a common pattern to iterate over a collection. This is where iterator pattern comes in the picture. Iterator pattern makes sure that anything that is a collection & can be iterated over, shall extend an interface named `Iterable`. This `Iterable` shall have a single method `getIterator()` that returns an iterator, which is then used to iterate over this collection.
- All concrete iterables have a concrete iterator which is then returned. All the concrete iterators extend a common interface called `Iterator`, which usually have methods like `isDone()`, `next()`, `current()`.
- By doing such a distinction, we make sure we obey the single responsibility principle as `Iterable` contains the logic for the collection, while `Iterator` maintains the current index & loops over the collection.

### Solution (Example based)

```tsx
interface Window {}

// Interface of the objects that contain the iterator
interface Iterator<T> {
	isDone(): boolean {}
	next(): void {}
	current(): T {}
}

class WindowIterator implements Iterator<Window> {
	iterable: WindowIterable = null;

	constructor(iterable: WindowIterable) {
		this.iterable = iterable;
	}

	// Return true if there is nothing left in the collection
	isDone(): boolean {}
	// Increment the index by 1
	next(): void {}
	// Return the item of collection at the current index
	current(): Window {}
}

// Interface of the objects that contain a collection
interface Iterable {
	getIterator(): Iterator {}
}

class WindowIterable {
	getIterator(): Iterator {
		return new WindowIterator(this);
	}
}
```

### How it solves?

Iterator pattern firstly allows us to have a consistent way to loop over collection of items, while also making sure that the client can pull values from the collection one at a time, which allows for collections that can have infinite values.

### Pros

1. **Decouples Collection & Iteration** - It helps in separating the logic for iterating from the actual collection.
2. **Simplified Client Code** - It provides a common interface to clients for iterating over different types of collections.
3. **Multiple Iterators** - It provides a way to specify multiple ways of iterating over a same collection.
4. **Lazy Evaluation** - Iterators offer a way to perform lazy evaluation, which means that elements are fetched & processed only when needed.
5. **Encapsulates Iteration State** - It helps in encapsulating the iteration state, making it easier to manage & reduces the risk of exposing implementation details.

### Cons

1. **Increased Complexity** - This might add a lot of complexity for simple collections like lists.
2. **Limited Access** - Iterators usually provide read-only access to elements. To support modifications to the collection during iterations, additional considerations might be needed.
3. **Implementation Effort** - There can be a significant effort required for implementation of iterators in complex data-structures.
4. **Language Support** - Usefulness & ease of implementation can vary depending on the programming language & its support for iterators.
