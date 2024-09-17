---
slug: "state-pattern"
title: "State Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of State Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/N12L5D78MAA?si=IEfYfilaQtazvczI"
---

### Problem Statement

- Most of the classes we usually create have some state associated with them. As an example, we can consider designing a turnstile gate (the one that is used to enter metro stations).
- A gate like this can be in any of the following states, like `Open`, `Closed`, `Processing`, etc. When the person can walk through it, its in the `Open` State, but when the person cannot walk through it, its in the `Closed` State. Apart from this, there can be a `Processing` State for when the user has tapped their card on the machine, but the machine is still processing the payment.
- For such an object, we see that there are multiple different types of states. A number of events like `Enter`, `PayOk`, `PayFail` can change this state.
- For example, if the gate was in the state `Open`, & there is an event `Enter`. This means that the gate was open & the person entered through the gate, and the gate should now be closed again before the next person can enter. Hence, events are associated with change of states.

### Solution

- For designing such a state system, the easiest way is to store the state of the system internally in its class. Whenever an event is triggered, we have a if-else or a switch-case that checks the current state, and then checks the type of event triggered, and based on the combination of these 2, decides what should be the next state.
- But, its not hard to for-see a big issue with this approach. Having a nested if-else or a switch-case condition can be an easy way for missing on how an event will be handled for a particular state. To go around this issue, we use the State Pattern.
- According to the state pattern, we should pull the logic to handle events for each state out of our component. What this means is that, we will have our `Door` class which will include the current state of the door, and we will have a `State` Interface which is implemented by multiple concrete state objects.
- Each of these state objects represent a single state of the system, and includes methods which handle the change in state whenever any of the event occurs. Each state method will return the next state instance, which is then stored inside the `Door` class.

### Solution (Example based)

```tsx
// Class for the Machine
class Gate {
	state: GateState = null;

	constructor(state: GateState) {
		this.state = state;
	}

	onEnter(): void {
		this.state = this.state.handleEnter(this);
	}

	onPay(): void {
		this.state = this.state.handlePay(this);
	}

	onPaySuccess(): void {
		this.state = this.state.handlePaySuccess(this);
	}

	onPayFailure(): void {
		this.state = this.state.handlePayFailure(this);
	}
}

// Interfaces & Concrete Implementation for the States
interface GateState {
	handleEnter(gate: Gate): GateState {}
	handlePay(gate: Gate): GateState {}
	handlePaySuccess(gate: Gate): GateState {}
	handlePayFailure(gate: Gate): GateState {}
}

class ClosedGateState {
	handleEnter(gate: Gate): GateState {
		return new ClosedGateState()
	}
	handlePay(gate: Gate): GateState {
		return new ProcessingGateState()
	}
	handlePaySuccess(gate: Gate): GateState {
		return new OpenGateState()
	}
	handlePayFailure(gate: Gate): GateState {
		return new ClosedGateState()
	}
}

// Client-Side Initiation
const gate = new Gate(new ClosedGateState())
gate.onEnter();
```

### How it solves?

With the use of State Pattern, the change in state based on events is pulled out of the component, and with the help of polymorphism, we build a system where each permutation of the current state & the possible events is handled.

### Pros

1. **Modular & Clean Code** - It promotes clean, well-organised & modular code. Each state is encapsulated in its own class.
2. **Open/Close Principle** - The pattern adheres to the open/close principle as new states can be introduced without having to modify existing one’s.
3. **Simplified Context** - The context (the object whose behaviour is changed) becomes simpler because state-specific behaviour is delegated to state objects.
4. **State Transitioning Logic** - The logic for state transitions is centralised & abstracted in concrete implementation of the state.

### Cons

1. **Increased Number of Classes** - Implementation of state pattern can lead to a larger number of classes as each state is represented by a separate class.
2. **Complexity for Smaller Systems** - For relatively smaller systems, implementing state pattern can introduce unnecessary complexity.
3. **State Object Instantiation** - Managing state objects can be complex, especially how these objects are dynamically created.
