---
slug: "visitor-pattern"
title: "Visitor Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Visitor Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
---

### Problem Statement

Consider a scenario where we are implementing a Shopping Cart. Items in the cart can optionally be discounted. We need to implement a way of calculating the total cost of products in the cart after discounts.

### Solution

For such a use-case, we can either have very simple implementations of the products such that they return the price after the discount. But, just to make this example, we are assuming we have two different types of product classes. This would be the `RegularProduct` & `DiscountedProduct`. Each of them have a method named `accept()` which accepts a `ShoppingCartCalculator` . This shopping cart calculator takes into account the discounts & returns the final price.

### Solution (Example based)

```tsx
interface ShoppingCartItem {
  accept(visitor: ShoppingCartVisitor): number;
}

class RegularProduct implements ShoppingCartItem {
  constructor(price: number): void {}

  accept(visitor: ShoppingCartVisitor): number {
    return visitor.visit(this);
  }
}

class DiscountedProduct implements ShoppingCartItem {
  constructor(price: number, discount: number): void {}

  accept(visitor: ShoppingCartVisitor): number {
    return visitor.visit(this);
  }
}

interface ShoppingCartVisitor {
  visit(product: Product): number;
}

class ShoppingCartCalculator implements ShoppingCartVisitor {
  visit(product: RegularProduct): number {
    return product.price;
  }

  visit(product: DiscountedProduct): number {
    return product.price - product.discount;
  }
}

// Client-Code
const cartCalculator = new ShoppingCartCalculator();

const item1 = new RegularProduct(30);
const item2 = new DiscountedProduct(50, 10);

let totalCost = 0;
totalCost += item1.accept(cartCalculator);
totalCost += item2.accept(cartCalculator);

console.log(totalCost); // 70
```

### How it solves?

Visitor pattern is helpful in addition of features in existing classes without modifying them. This helps in preventing the classes to become very large, while also promoting separation of concerns.

### Pros

1. **Separation of Concerns** - It helps in separating the behaviour(visitor) from the elements(visitable). This separation makes it easier to add features without modifying the elements.
2. **Extensibility** - It provides a way of adding new operations & behaviours to a set of classes without altering their codebases. This makes the codebase extensible.
3. **Type Safety** - Visitors can be designed to ensure type-safety. This means compiler can catch type-related errors at runtime itself.
4. **Reusability** - Visitors can be reused across the codebase, making it possible to apply common algorithms or behaviours.

### Cons

1. **Complexity** - It can introduce complexity in simpler scenarios where adding functionality is straightforward. This might end up being an overkill for smaller projects.
2. **Tight Coupling** - Elements require visitor interface in their accept methods. This can make the codebase less flexible.
3. **Limited Accessibility** - It is not well-suited for situations where the visitor needs access to internal state of elements as it often relies on public interfaces to access & manipulate objects.
4. **Complex Dispatch Logic** - Managing multiple visitors with different operations can become complex, especially as the number of visitors & element type increases. This can make the codebase hard to understand & maintain.
