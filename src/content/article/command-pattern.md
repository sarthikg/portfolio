---
slug: "command-pattern"
title: "Command Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Command Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/9qA5kw8dcSU?si=yNtEiSITJkyAxqnS"
---

### Problem Statement

- Consider a case where we have to implement a software solution that can be used to program a physical remote. This remote is responsible for controlling the smart home appliances. Now, a user can configure each button on this remote to a custom functionality. For this problem, the first thing that comes in mind is dependency injection, which is correct. But, there’s a small issue. What if the requirement is further enhanced in future for the users to be able to undo a set of their actions?
- It requires storing the commands that the user sent, and being able to reverse those commands. For this, we have the command pattern, which is very similar to how strategy pattern worked, but with a few small enhancements & modifications.

### Solution

- In command pattern, we encapsulate a command. We have a `Command` Interface which every concrete command extends from. This encapsulated concrete class accepts the receiver as a dependency through its constructor.
- The concrete command class implements 2 methods, `execute()` & `unexecute()` . As the name suggests, the `execute()` method will perform the action on the receiver, while `unexecute()` command is used to undo that action on the receiver.

### Solution (Example based)

- In the smart-home example discussed above, a bunch of smart-home appliances like the smart-bulbs, thermostats will be the receivers, while the remote-controls will act as invokers. Invokers allow users to perform actions on these receivers, and these actions are encapsulated as command objects.

```tsx
// Class of the Receiver. Receivers don't have to extend a particular interface.
// Essentially receivers are out of the grey boundary for this pattern
class LightBulb {
	turnOn(): void {}
	turnOff(): void {}
	dimUp(): void {}
	dimDown(): void {}
}

// Multiple different commands extend over a single interface
interface Command {
	execute(): void {}
	unexecute(): void {}
}

class LightOnCommand {

	_lightBulb: LightBulb;

	constructor(lightBulb: LightBulb): void {
		this._lightBulb = lightBulb
	}

	execute(): void {
		this._lightBulb.turnOn()
	}
	unexecute(): void {
		this._lightBulb.turnOff()
	}
}

class LightOffCommand {
	execute(): void {
		this._lightBulb.turnOff()
	}
	unexecute(): void {
		this._lightBulb.turnOn()
	}
}

// Class of the Invoker. Invokers don't have to extend a particular interface.
// Essentially invokers are out of the grey boundary for this pattern
class RemoteControl {
	_onCommand: Command;
	_ofCommand: Command;

	constructor(onCommand: Command, offCommand: Command) {
		this._onCommand = onCommand;
		this._offCommand = ofCommand;
	}

	handleOnPress(): void {
		this._onCommand.execute();
	}

	handleOffPress(): void {
		this._offCommand.execute();
	}
}
```

### How it solves?

- This pattern helps encapsulate actions in form of commands. Every command should ideally have a way of executing & unexecuting it. This structure of the commands help in implementing functionality like batching, queuing, undoing, etc.
- Also, since all the commands are implementing a common interface, it makes this pattern scalable where new commands can be implemented & be injected into the Invokers

### Pros

1. New commands can be added without changing existing code.
2. Reduces coupling between the invoker & the receiver.

### Cons

1. Increase in the number of classes as each command requires a new class.
