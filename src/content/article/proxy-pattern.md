---
slug: "proxy-pattern"
title: "Proxy Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Proxy Pattern",
  }
tags: ["Low Level Design", "Structural Design Pattern"]
featured: false
---

### Problem Statement

- Imagine a very hypothetical scenario where we have a `BookParser` which accepts a `Book`. This book can be humongous in size, and the `BookParser` offers various different methods to get information of the book. These methods can include, `getNumberOfPages()`, `getNumberOfChapters()`, etc.
- In the above example, we also assume that these operations on `BookParser` are expensive in nature, and we don’t want to incur these expensive costs when these methods are called, but we want the results of these methods to be pre-computed.
- This means, whenever a new `BookParser` is initialised, we want it to precompute information like number of pages & number of chapters which can be accessed later on with the help of methods.
- Now, we are in future, and we notice that, we don’t always necessarily call either of these methods on the `BookParser` for some books. This means, we are pre-computing information for books that we are never utilising. In-order to optimise this scenario, we will have to do some refactors.

### Solution

- In the above example, as part of the optimisation exercise, we want to modify the behaviour such that we only do the expensive computation only when we have called either of the methods, i.e. we only initialise a new `BookParser` when we call a method on `BookParser` like `getNumberOfPages()`.
- One way to modify it is to modify the `BookParser` class itself. But in our scenario, we are considering that `BookParser` class actually comes from an external library. Hence, the option for modifying that class is not available.
- Here, comes the `Proxy Pattern (Virtual)`. We create a proxy class that in-turn calls these methods on the `BookParser`. But, the proxy only initialises a new `BookParser` when a method is first called on it. This makes sure we are not pre-computing information with expensive operations we don’t use.

### Solution (Example based)

```tsx
class Book {}

interface BookParserInterface {
	getNumberOfPages(): number {}
	getNumberOfChapters(): number {}
}

class BookParser implements BookParserInterface {
	_numOfPages: number;
	_numOfChapters: number;

	constructor(book: Book): void {
		this.compute(book)
	}

	private compute(book): void {
		// Some expensive operation
		this._numOfPages = 10
		this._numOfChapters = 2
	}

	public getNumberOfPages(): number {
		return _numOfPages;
	}

	public getNumberOfChapters(): number {
		return _numOfChapters;
	}
}

class LazyBookParser implements BookParserInterface {
	_book: Book;
	_bookParser: BookParser;

	constructor(book: Book): void {
		this._book = book;
	}

	private createBookParser(): void {
		this._bookParser = new BookParser(this._book)
	}

	public getNumberOfPages(): number {
		if (!this._bookParser) {
			this.createBookParser()
		}
		return this._bookParser.getNumberOfPages()
	}

	public getNumberOfChapters(): number {
		if (!this._bookParser) {
			this.createBookParser()
		}
		return this._bookParser.getNumberOfChapters()
	}
}
```

### How it solves?

- Proxy Pattern allows us to introduce a new class that controls access to the underlying resource. In an event where the underlying resource cannot/should not be modified, we can introduce a proxy.
- Proxy Pattern allows for 3 different types of proxies. These include:
  1.  **Remote Proxy** - should be used when accessing a remote resource
  2.  **Virtual Proxy** - controls access to a resource which is expensive to create
  3.  **Protection Proxy** - controls access to a resource based on access rights

### Pros

1. Allows for adding RBAC (Role Based Access Control) to an underlying resource.
2. Allows for deferring the initialisation of the underlying resource.
3. Allows for representing objects in a remote server or a different address space.
4. Allows for implementing caching. A proxy can cache the results for expensive ops.
5. Allows for addition of logging, monitoring, etc.

### Cons

1. Tends to introduce complexity into the system.
2. Can add performance overhead incase of Virtual Proxies.
3. Maintenance overhead as changes to resource interface will require changes to proxy.
