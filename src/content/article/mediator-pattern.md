---
slug: "mediator-pattern"
title: "Mediator Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Mediator Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
---

### Problem Statement

- Consider a scenario where multiple objects require to communicate among themselves. Usually in such cases, its better to decouple them, and instead use a mediator that handles the communications among these objects. The requirement become rather necessary when the objects & the communication becomes complex, and has to be managed more systematically.
- In a case for an Air Traffic Control System, there are multiple Aircraft instances & each of those need to coordinate their movements in order to ensure safe take-offs, landings & in-flight operations.

### Solution

- In case of the above Air Traffic Control System, rather than enabling each aircraft to communicate with other aircrafts directly, its better to introduce a mediator which manages all the movements, and also facilitates the communication among them.
- This central mediatory in this case is the Air Traffic Control.

### Solution (Example based)

```tsx
class AirTrafficController {
  aircrafts: Aircraft[] = [];

  registerAircraft(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  requestTakeoff(aircraft: Aircraft): boolean {
    // Logic to grant/deny takeoff request
  }

  requestLanding(aircraft: Aircraft): boolean {
    // Logic to grant/deny landing request
  }

  broadcastMessage(sender: Aircraft, message: string): void {
    this.aircrafts.forEach((aircraft) => {
      if (aircraft !== sender) {
        aircraft.receiveMessage(message);
      }
    });
  }
}

class Aircraft {
  constructor(name: string) {
    this.name = name;
  }

  requestTakeoff(atc: AirTrafficController): boolean {
    return atc.requestTakeoff(this);
  }

  requestLanding(atc: AirTrafficController): boolean {
    return atc.requestLanding(this);
  }

  receiveMessage(message: string): void {
    console.log(message);
  }

  broadcastMessage(atc: AirTrafficController, message: string): void {
    atc.broadcastMessage(this, message);
  }
}

// Client-Code
const atc = new AirTrafficController();

const aircraft1 = new Aircraft("Aircraft 1");
const aircraft2 = new Aircraft("Aircraft 2");

atc.registerAircraft(aircraft1);
atc.registerAircraft(aircraft2);

aircraft1.requestTakeoff(atc);
aircraft2.requestLanding(atc);
```

### How it solves?

Mediator pattern facilitates communication across similar objects. This makes sure that interactions can be managed centrally, while also decoupling the objects for easier testability & maintenance.

### Pros

1. **Decouples Components** - It promotes loose coupling by ensuring objects do not directly communicate with each other. This reduces the dependency, and makes the system more maintainable.
2. **Centralised Control** - It helps in centralising the control & coordination in a single mediator making the interactions simple & making system easier to understand & manage.
3. **Promotes Reusability** - Components can be reused since they are not tightly coupled with each-other. New components can be added/removed without affecting the system.
4. **Single Responsibility** - Mediator is responsible for handling communication & coordination, while individual components handle their internal logic.
5. **Enhances Testability** - Testing individual components becomes easier as they can be isolated & tested independently without the need of collaborating objects.

### Cons

1. **Complexity** - This pattern adds a new layer of complexity, especially when the communications in the mediator get very intricate.
2. **Bottleneck** - Mediator can become a bottleneck if its responsible for too many interactions & becomes overwhelmed.
3. **Maintaining the Mediator** - The mediator can become a large & complex class as the system grows, making it challenging to maintain.
4. **Increased Dependencies on the Mediator** - While the components are loosely coupled to each other, they become tightly coupled to the mediator, making it harder to reuse outside the context of the mediator.
