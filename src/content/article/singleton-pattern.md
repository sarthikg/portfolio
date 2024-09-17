---
slug: "singleton-pattern"
title: "Singleton Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Singleton Pattern",
  }
tags: ["Low Level Design", "Creational Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/hUE_j6q0LTQ?si=-9aTTcQdjr5njkOa"
---

### Problem Statement

Imagine a scenario where a particular class is representative of the global state of the application. In this case, one should want only a single instance of that class to exist. To solve this problem, there exists the singleton pattern.

### Solution

According to the singleton pattern, a class can only be initialised once. This means, there can only ever be a single instance of it. The restriction is baked into the class itself, hence even if clients want, they are unable to create new instances of it.

> [!info] This property of singletons where they cannot be re-initialised even if client code wants to re-initialise it makes this a pattern that is usually considered as “code-smell”

Applications where a single instance of a class exists are not an issue, but restricting a behaviour where only a single instance of a class can exist is what causes the issue.

> [!info] There’s a saying that “one man’s constant is another man’s variable”. Being a singleton, properties inside it can be modified by anyone across the code-base, and the affects of it are rippled across the usages.

### Solution (Example based)

- In the following case, the constructor was made private. Hence, no one from outside has an access to initialise a new instance of it. To get by that, we add a static method which checks if an instance of the class exists in the static private variable. If an instance already exists, it returns that, else it creates a new instance & saves it in the static private variable while also returning that instance.
- In JavaScript in general, this logic can also be moved to the constructor itself, while making the constructor public. Doing this way allows us to get the instance of this class by using the `new` keyword directly.

```tsx
class GlobalState {
  private static _instance: GlobalState;

  public static getInstance() {
    if (!GlobalState._instance) {
      GlobalState._instance = new GlobalState();
    }
    return GlobalState._instance;
  }

  private constructor() {}
}
```

### How it solves?

This method makes sure a single instance of a class only ever exists.

### Pros

1. It allows for a single instance with global access.
2. The initialisation of this class instance can be lazy. This means, the instance of this class is only initialised only when its first used. This can have memory benefits.

### Cons

1. We lose the single responsibility principle as the same class has the following responsibilities:
   1. Create an instance of itself
   2. Make sure only a single instance can ever exist of it
   3. The basic class functions for which this class was created. In this case, the global-state.
2. Global state makes testing the application tough.
