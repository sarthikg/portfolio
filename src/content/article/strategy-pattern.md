---
slug: "strategy-pattern"
title: "Strategy Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Strategy Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/v9ejT8FO-7I?si=hgDRYw-iCp_KyM36"
---

### Problem Statement

In the standard design for Inheritance, there are a few problems:

1. What if one of the inherited class needs some functionality? Example: What if a specific type of duck can fly, while the rest of them cannot?
   _For implementing that method in the inherited class, we will have to add that method in the class its inheriting from. This means that every other inherited class will also have to implement this method, even if the method does not make sense for them._

> Even though the inherited classes can have their own methods which are not necessarily part of the class its inheriting from, but still, its usually required to add it on the top level class as that usually acts as the abstract class for clients to interact with the inherited classes.

1. What if 2 different inherited classes want to share the same logic for a method? Example: What if 2 types of ducks have a similar fly method?

   _Inheritance works great when behavior is shared downwards. But, when there is a requirement to share the behavior on the same level, which in this case are the 2 types of ducks inheriting from the same parent, its usually tough to do so. Though, there are the following options:_

   1. _Copy & paste the logic for the method in both the files_
   2. _Create a new class like **FlyMethodTypeA** which contains the logic for that method, and is extended by both the inherited classes which shares the same logic._

### Solution

- Inheritance is good when behaviour is shared downwards, which is usually not the case, or which is not usually the case in the long-run. As & when new functionality is needed, there will almost always be a scenario for sharing functionality at the same level.
- To get by this, we should think of differences in the inherited classes as a difference in algorithms behind the actual methods. Thinking this way allows us the pull out the logic in separate classes which can be plugged in by the client using it.

### Solution (Example based)

- As in the above described scenario, assume all the ducks have some features. Like, all the ducks have a speak method, a walk method, a fly method, etc.
- Now, different types of ducks might implement these behaviours differently. Here, it makes sense to have a single **Duck Class** which internally has instances of **SpeakBehavior**, **WalkBehavior**, **FlyBehavior**, etc.
- This way, when the client initialises a new object from the Duck Class, they can pass the concrete implementations of these dependencies, aka using Dependency Injection.

```tsx
/** Speak Behaviour Implementation **/
interface SpeakBehavior {
	speak(): string;
}

class NormalSpeakBehavior implements SpeakBehavior {
	speak(): string {
		return "Quack!"
	}
}

class AngrySpeakBehavior implements SpeakBehavior {
	speak(): string {
		return "QUACK!"
	}
}

/** Duck Class Implementation **/
class Duck {
	private _speakBehavior: SpeakBehavior:

	constructor(speakBehavior: SpeakBehavior = NormalSpeakBehavior ) {
		this._speakBehavior = new speakBehavior();
	}
}

/** Client Code **/

// To get a duck with the default behaviour
const duck = new Duck()

// To get a duck with a custom behavior
const angryDuck = new Duck(AngrySpeakBehavior)
```

### How it solves?

1. Instead of using class inheritance, we are using object composition. This allows us to share behaviours across variants since we don’t have variants hard-coded anywhere. Its the client that can customise the default behaviour with the one they want.
2. Adding more behaviours is independent of variants, since there is no concept of variants in here. A new behaviour can be introduced by the client & injected for custom functionality.

### Pros

1. Behaviours are extracted out in their own classes, and the main class works like a main frame with hollow slices which can be filled with either of the available or new strategies.
2. Clients are not bound to the already available options. They can create their custom strategies which can be passed to customise it to their liking.
3. Testing gets easier as there is less code repetition, while injected dependencies can easily be mocked.

### Cons

1. Client is required to have knowledge of the available strategies as they are the one injecting the required strategies.
2. In some rare cases, strategies might also have common code across a few of them, hence they might also have to follow a similar pattern for themselves.
3. This pattern at the very least requires dependency injection for it to work. The issue with dependency injection is that after a while, a single class might have more than 10’s of dependencies which are required to be injected in them before an object from them can be created.
