---
slug: "memento-pattern"
title: "Memento Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Memento Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
---

### Problem Statement

Imagine a scenario where we are required to build a text-editor. The user of this text-editor shall have the functionality to undo or redo their changes. Hence, we need a state machine where the state of the text-editor can be moved across iterations.

### Solution

- There are 2 possible solutions for such a use-case:
  1.  **Command Pattern** - Command pattern helps in encapsulating command in a way that the commands can optionally have an `unexecute()` method alongside the `execute()` method. Even though this is an optional feature of command pattern, but this can be used alongside a way of storing the commands. This will eventually enable us to move across the state history.
  2.  **Memento Pattern** - Memento pattern facilitates in storing the states. In contrast to the command pattern which provides an option of un-executing a command, memento pattern stores the states of the component, and allows to pull a state from history & apply it.
- In most cases, memento pattern is the preferred way of going about this problem. This is because the command pattern has the feature of un-execute as an auxiliary feature & the main focus of that pattern is to encapsulate commands such that they can be treated as objects, and can be queued.
- One other reason why memento pattern might be a better pattern for this use-case is that in rare cases, executing or un-executing a command might be a compute-heavy, or an asynchronous operation. While the user is navigating back & forth in their history of changes, we might not want such operations to occur frequently when memento pattern actually solves it without these overheads.

### Solution (Example based)

```tsx
// Memento objects are technically states of the component
class Memento {
  constructor(state: string): void {
    this.state = state;
  }

  getState(): state {
    return this.state;
  }
}

// Component is the text-editor in this case
class Component {
  content = "";

  setContent(content: string): void {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  createMemento(): Memento {
    return new Memento(this.content);
  }

  restoreFromMemento(memento: Memento): void {
    this.content = memento.getState();
  }
}

// Caretaker keeps track of state history & allows to navigate across
class CareTaker {
  mementos: Memento[] = [];

  push(memento: Memento): void {
    this.mementos.push(memento);
  }

  pop(): Memento {
    return this.memento.pop();
  }
}

// Client-Code
const textEditor = new Component();
const stateHistory = new CareTaker();

textEditor.setContent("Sarthik");
stateHistory.push(textEditor.createMemento());
textEditor.setContent("Sarthik Gupta");
stateHistory.push(textEditor.createMemento());

const lastState = stateHistory.pop();
const lastToLastState = stateHistory.pop();

textEditor.restoreFromMemento(lastToLastState);
textEditor.getContent(); // "Sarthik"
```

### How it solves?

Memento helps in storing a list of previous state of a component. Then, with the help of a caretaker object, we are able to navigate to previous states of that component. The logic for managing states is decoupled from the actual component.

### Pros

1. **State Management** - This pattern provides an effective way of capturing & managing an object’s state, allowing for the ability to restore it to previous states.
2. **Decoupling** - It helps in maintaining a clear separation of concerns by keeping state separate from the core logic of the application. This separation facilitates to better organisation & maintainability.
3. **Recovery & Rollback** - It enables the recovery & rollback of object’s state which can be useful in scenarios where data integrity & user experience are crucial.
4. **Multiple Snapshots** - Multiple snapshots or states can be saved allowing for more granular approach to undo & redo operations.

### Cons

1. **Storage Overhead** - Saving multiple states can consume memory & storage space, which can be of concern in resource-constrained environments or when dealing with large & complex objects.
2. **Performance Overhead** - Capturing & restoring states can induce performance overhead, especially for objects with complex states.
3. **Security** - Storing state objects externally, such as in files or databases may raise security concerns if sensitive or confidential data is involved. Its hence important to store state objects securely.
