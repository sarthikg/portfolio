---
slug: "flyweight-pattern"
title: "Flyweight Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Flyweight Pattern",
  }
tags: ["Low Level Design", "Structural Design Pattern"]
featured: false
---

### Problem Statement

- Consider a scenario like a graph or a game where there are numerous instances of a class. This can be a game in which every subsequent level means new set of balls appearing on the screen which the player has to dodge. Or, in the graph, it can be numerous nodes with mostly similar data.
- In the graph example, there can be 10’s of thousands of nodes, and each of these node may look similar with slight differences in maybe the text, or the colour.
- In the game example, there can be thousands of balls, and each ball might look exactly the same but have different positions & different speeds with which they are travelling.
- As we can guess, having so many objects might end up hogging a lot of memory making the system very slow.

### Solution

- To get around this issue, we can use the Flyweight pattern. This is a very simple to understand pattern which says that instead of creating multitudes of objects, we will only create a few varieties of objects.
- Let’s say, in the graph example, the nodes can be either of 2 different types. These types can be in-terms of the looks. So, we will end up creating 2 different objects only.
- Similarly in the game example, lets say there are a few different types of ball, let’s say in terms of their looks. So, we will only create those many different objects.
- These objects created have set values for a few intrinsic properties of it. Intrinsic properties in this case are the one’s which are consistent across a family of objects. Hence, this helps in making sure that only a single instance of these intrinsic properties ever exists, since there is only a single instance of these intrinsic objects.
- For the rest of thousands of objects, we will pass the extrinsic properties during their usage while using the already existing objects.

### Solution (Example based)

```tsx
// Un-optimised Solution
class Ball {
  color: string = null;
  imageUrl: string = null;
  coordX: number = null;
  coordY: number = null;
  radius: number = null;

  constructor(
    color: string,
    imageUrl: string,
    coordX: number,
    coordY: number,
    radius: number,
  ): void {
    this.color = color;
    this.imageUrl = imageUrl;
    this.coordX = coordX;
    this.coordY = coordY;
    this.radius = radius;
  }

  draw(): void {
    // Draws the ball on the screen
  }
}
```

```tsx
class Ball {
  color: string = null;
  imageUrl: string = null;

  // Accept intrictic properties in the constructor
  constructor(color: string, imageUrl: string): void {
    this.color = color;
    this.imageUrl = imageUrl;
  }

  // Accept extrinsic properties in the method
  draw(coordX: number, coordY: number, radius: number): void {
    // Draws the ball on the screen
  }
}

class BallFactory {
  ballInstances = {};

  getBall(color: string, imageUrl: string): Ball {
    // Check if a ball instance exists in the ballInstances
    // If doesn't exist, create a new one, add it to the ballInstances
    // Return the ball instance
  }
}

// Client-Code
const ballFactory = new BallFactory();

const greenBall = ballFactory.getBall("green", "cosco-ball.jpg");
greenBall.draw(0, 0, 10);
greenBall.draw(1, 1, 5);

const redBall = ballFactory.getBall("red", "dixon-ball.jpg");
redBall.draw(0, 1, 5);
redBall.draw(1, 0, 10);
```

### How it solves?

Using this pattern makes sure that we don’t end up creating new instances of objects while copying properties across them which are intended to be similar. Instead, we create a few instances with these different intrinsic properties, and pass the extrinsic properties directly to method calls so that limited number of instances can handle large number of use-cases.

### Pros

1. Memory Efficiency - Usage of this pattern helps in significantly reducing the memory footprint if used correctly.
2. Improved Performance - The reduced memory footprint directly correlates with a better performance of the application as well.
3. Code Maintenance - Separating intrinsic state from extrinsic state helps in making the code more manageable. Changes to intrinsic state affects all the objects sharing that state.

### Cons

1. Complexity - Usage of this pattern can induce complexity in environments where distinguishing between intrinsic & extrinsic state is rather difficult.
2. Pattern Inside a Pattern - Flyweight pattern usually requires a factory to work alongside. Hence it is like a pattern inside of a pattern.
3. Premature Optimisation Trap - This pattern can frequently be a trap for premature optimisation in code-bases.
