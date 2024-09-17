---
slug: "composite-pattern"
title: "Composite Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Composite Pattern",
  }
tags: ["Low Level Design", "Structural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/EWDmWbJ4wRA?si=cjMYGcfah8xo8cZO"
---

### Problem Statement

- Consider a scenario where we have a tree-like data structure. Every node can either have a list of nodes (in which case its a group), or can be a leaf node.
- We want to implement such a structure that both nodes & groups should have methods that can be called on them. We don’t want to add conditionals to check if a node is a group or not before calling methods on it.

### Solution

This is a classic example where we are replacing conditionals with polymorphism. By using the composite pattern, we make sure that both the **node** & the **group** implement a common interface that makes both the **node** & the **group** to implement certain method interfaces.

### Solution (Example based)

```tsx
interface NodeInterface {
	getNameList(): string[] {}
}

class Group implements NodeInterface {
	nodes: Node[] = [];

	getNameList(): string[] {
		return nodes.map(node => ...node.getNameList())
	}
}

class Node implements NodeInterface {
	getNameList(): string[] {
		return [this.name];
	}
}
```

### How it solves?

Composite Patterns makes sure that both the composites (groups) & individual-elements (nodes) can be treated similarly. In the above case as well, we see that both the nodes & the groups implement a method with name `getNameList()` with a common signature.

### Pros

1. Component Compatibility - Clients can treat both the individual objects & the compositions in a uniform way.
2. Recursive Structure - It provides a recursive structure for representing data.
3. Improved Code Reusability - It promotes code-reusability between groups & nodes.
4. Separation of Concerns - It allows for separation of concerns as nodes & groups can focus on their specific behaviours.

### Cons

1. Limited Component Functionality - In an effort to maintain a common interface, it might happen that a lot of functionalities might not be added to the common interface which can cause exceptions.
