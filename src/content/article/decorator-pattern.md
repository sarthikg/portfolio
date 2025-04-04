---
slug: "decorator-pattern"
title: "Decorator Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Decorator Pattern",
  }
tags: ["Low Level Design", "Structural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/EECfgFQ44Kg?si=mlzKLTmbyS-fFrYs"
---

### Problem Statement

Considering a scenario where a baseline object can have multiple add-ons on top of it, the only possible option (without decorators) is to either:

1. Create multiple methods on the baseline object. Every method can be used to add an add-on. But, this can get complicated when certain add-ons can go individually, or some add-ons need to go on pairs. Also, some add-on’s might go in multiples, instead of a single unit of those. This can introduce a lot of conditional logic.
2. Extend the baseline class for each permutation & combination of the add-ons. This would certainly cause a class explosion, where every permutation have its own class. More the number of add-on’s, more are the number of classes. Will definitely not scale.

### Solution

- A rather easier solution would be to create wrappers on top of the baseline object that adds the logic for the add-on. This wrapper is a decorator. A decorator is of the type baseline class, as well as contains an instance of the baseline object.

### Solution (Example based)

- Consider an example of a coffee shop. There are a few baseline coffee options available like Espresso, Cappuccino, etc. But, customers have an option to customise their coffee’s from the add-on’s menu. These add-on’s can include whipped-cream, chocolate, caramel, etc. Here, every coffee with an add-on should have a description & a price associated with it.
- 2 of the possible solutions one can think are from the problem section. This includes adding methods on every coffee base-class, or maybe create a new class for every permutation of add-on’s available.
- But, the third solution, which is the preferred one in this case is to use the decorator pattern. In the decorator pattern, the base-lines are the products. These products can be consumed as it is, but to be able to add add-on’s to them, we create a bunch of decorator classes. Assuming a decorator class for whipped-cream will add the price of whipped-cream to whatever is the price of the base-line product is.
- A striking benefit to using such an approach is that one can add any add-on to any of the baseline product & will always get the desired behaviour. If the person feels like adding chocolate alongside whipped-cream, they can first pass the baseline-coffee object to the whipped-cream decorator & then the decorated object to the chocolate decorator.
- If you think deeply, this works like recursion. Baseline product here acts like a base-case, and every decorated object adds something to the result of the object passed to it. Maybe add price of the individual add-on to the existing price of the product.

```tsx
// Classes for the Product
interface Product {
	getDescription(): string;
	getPrice(): number;
}

class Espresso implements Product {
	getDescription(): string {
		return "Espresso"
	}

	getPrice(): number {
		return 50
	}
}

// Classes for the Decorators/Add-On's
interface AddOn extends Product {
	private _product: Product;
}

class WhippedCream implements AddOn {
	private _product: Product;

	constructor(product: Product): void {
		this._product = product
	}

	getDescription(): string {
		return `${this._product.getDescription()} | Whipped-Cream`
	}

	getPrice(): number {
		return 10 + this._product.getPrice()
	}
}

class Chocolate implements AddOn {
	private _product: Product;

	constructor(product: Product): void {
		this._product = product
	}

	getDescription(): string {
		return `${this._product.getDescription()} | Chocolate`
	}

	getPrice(): number {
		return 8 + this._product.getPrice()
	}
}

// Client-Side Initiation
const coffee = new Espresso();
const fancyCoffee = Chocolate(WhippedCream(coffee))
```

### How it solves?

This method helps in solving the explosion of methods or conditional logic if the behavior is attempted to be stuffed inside the baseline class itself, and prevents the explosion of classes if the same behavior is attempted to be achieved by sub-classing.

### Pros

1. Prevents the cons of the other available approaches.
2. Easier to test

### Cons

1. Order of add-on’s are not taken into consideration.
