---
slug: "chain-of-responsibility"

title: "Chain of Responsibility Design Pattern"
description: "This allows for modularised code where each handler tried to handle a request, and incase it is unable to do so, the next handler tries to do so."
date: 2023-12-24
image:
  {
    src: "/src/assets/images/article/chain-of-responsibility.jpg",
    alt: "Image of Chain-of-Responsibility",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
---

### Problem Statement

- Consider a scenario where we want to build an approval flow of some sort. This can be an approval for purchases. The approval process can involve multiple levels of authority, like employees, team-leaders, department-managers, and the finance department.
- To build such a system, we will require some way to pass the request to the next level incase the current level doesn’t have the permission to handle such requests.

### Solution

Chain of Responsibility is the perfect pattern that can be used for such a use-case. According to the chain of responsibility, there are multiple concrete handlers, with each of them capable of handling certain types of requests. If a request falls in that criteria, its handled, else, it’s forwarded to the next level of handler.

### Solution (Example based)

```tsx
abstract class PurchaseHandler {
  nextHandler: PurchaseHandler = null;

  setNextHandler(nextHandler: PurchaseHandler): void {
    this.nextHandler = nextHandler;
  }

  abstract processRequest(request): void {}
}

class EmployeeHandler extends PurchaseHandler {
  processRequest(request): void {
    if (request.amount < 100) {
      console.log("Employee can approve this request!");
    } else {
      if (this.nextHandler) {
        this.nextHandler.processRequest(request);
      } else {
        console.log("This request cannot be handled");
      }
    }
  }
}

class TeamLeaderHandler extends PurchaseHandler {
  processRequest(request): void {
    if (request.amount < 500) {
      console.log("Team Leader can approve this request!");
    } else {
      if (this.nextHandler) {
        this.nextHandler.processRequest(request);
      } else {
        console.log("This request cannot be handled");
      }
    }
  }
}

class DepartmentManagerHandler extends PurchaseHandler {
  processRequest(request): void {
    if (request.amount < 1000) {
      console.log("Department Manager can approve this request!");
    } else {
      if (this.nextHandler) {
        this.nextHandler.processRequest(request);
      } else {
        console.log("This request cannot be handled");
      }
    }
  }
}

// Client-Code
const employeeHandler = new EmployeeHandler();
const teamLeaderHandler = new TeamLeaderHandler();
const departmentManagerHandler = new DepartmentManagerHandler();

employeeHandler.setNextHandler(teamLeaderHandler);
teamLeaderHandler.setNextHandler(departmentManagerHandler);

const request1 = new Request("Google Analytics", 200);
const request2 = new Request("Datadog", 1000);

employeeHandler.processRequest(request1);
employeeHandler.processRequest(request2);
```

### How it solves?

Chain of Responsibility pattern creates a series of request handlers & a reference to the next handler in the chain. This makes sure that client can configure the order of request handlers as per their requirement, while also allowing for implementation of responsibility chain.

### Pros

1. **Decoupling of Senders & Receivers** - The pattern decouples the sender from knowing which specific object will handle the request, and the receiver doesn’t know who sent the request. This promotes a flexible & extensible design.
2. **Dynamic Handling of Requests** - Requests can be dynamically handled. This means that the handlers can be added, or the existing one’s can be modified at runtime.
3. **Single Responsibility Principle** - Each handler in the chain has a single responsibility, making the code easier to maintain & understand.
4. **Fallback Mechanism** - Using this pattern, we can provide a fallback mechanism incase a request was not handled by either of the handlers. These requests can be handled separately, or at least logged.

### Cons

1. **Request Handling Guarantee** - There’s no guarantee if the request will be handled in the chain. If the request goes unhandled, it should be handled by a default handler at the end of the chain.
2. **Debugging & Testing** - Debugging a problem in the chain might get complicated as it may require tracing the request through multiple handlers to identify the problem.
3. **Performance Overhead** - As the request travels through the chain, there might be a small performance overhead especially in longer chains.
