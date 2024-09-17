---
slug: "prototype-pattern"
title: "Prototype Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Prototype Pattern",
  }
tags: ["Low Level Design", "Creational Design Pattern"]
featured: false
---

### Problem Statement

- Consider a scenario where we have an cloth shop. This cloth shop offers variety of clothing choices ranging from t-shirts, jeans to socks. Each of these clothing types can then have their own set of customisations like colours, patterns etc.
- We want to design such a service, but we should consider that creating the base clothing is expensive compared to customisations. This means, major effort is spent in building a t-shirt than to colour it.

### Solution

- For such a use-case where initial object build-up is expensive or complex, while customisation is easier, we can use prototype pattern. Prototype pattern simply says that we will create a clothing object, which can be either t-shirt, jeans or socks.
- Now, the customisation service just takes these objects that are already built, and apply customisations on top of it. Practically speaking, this doesn’t make a lot of sense as we cannot just clone a t-shirt, and will have to eventually build a new t-shirt. But just imagine, once we build a t-shirt, we can simply xerox it. 😝
- In this case, whenever someone asks for a customised clothing, we can simply xerox one of the already built t-shirts instead of building a new t-shirt from scratch, because who wants to work in this lazy world?

### Solution (Example based)

```tsx
interface Clothing {
	cloth: string;
}

class TShirt implements Clothing {
	cloth = "cotton"

	build(): void {
		// Builds a t-shirt
	}

	clone(color: string) {
		return this.clone() // This is not correct javascript syntax, but ok...
	}
}

class Jeans implements Clothing {
	cloth = "cotton"

	build(): void {
		// Builds a jean
	}

	clone(color: string) {
		return this.clone() // This is not correct javascript syntax, but ok...
	}
}

class Socks implements Clothing {
	cloth = "polyster"

	build(): void {
		// Builds a sock
	}

	clone(color: string) {
		return this.clone() // This is not correct javascript syntax, but ok...
	}
}

class ClothCustomiser {
	clothMap = {}

	build(clothing: string; color: string): Clothing {
		if (!clothMap[clothing]) {
			this.addClothing(clothing)
		}
		return clothMap[clothing].clone(color)
	}

	addClothing(clothing: string): void {
		if (clothing === "tshirt") {
			this.clothMap["tshirt"] = new TShirt();
		} else if (clothing === "jeans") {
			this.clothMap["jeans"] = new Jeans();
		} else (clothing === "socks") {
			this.clothMap["socks"] = new Socks();
		}
	}
}
```

### How it solves?

Prototype method makes sure that the complex or the heavy initialisation is done only once rather than it happening whenever an object is created. This helps in optimising the current code-base.

### Pros

1. Efficient Object Creation - It allows for efficient creation of new objects by copying existing prototypes. This can be more efficient than creating objects from scratch, especially when construction of objects is complex or resource-intensive.
2. Flexibility - It provides flexibility of customisations while still adhering to the base prototype over which it is built upon.
3. Reduced Subclassing - Unlike other design patterns like Factory Method, this eliminates the need of multiple subclasses to cover the available customisation options.

### Cons

1. Shallow Copy Limitation - Prototype pattern usually involves shallow copy of objects. This means that the internal references to other objects will be shared & can have its own set of side-effects.
2. Complexity - Implementation of deep copying, while also ensuring objects are cloned properly incase of complex relationships might get tough.
3. Deep Copy Limitation - Deep copying the object might also be limited incase the cloned object contains some complex objects or references like file-handlers.
