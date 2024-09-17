---
slug: "observer-pattern"
title: "Observer Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Observer Pattern",
  }
tags: ["Low Level Design", "Behavioural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/_BpmfnqjgzQ?si=y6N0N_7x3MoHBiq5"
---

### Problem Statement

Considering a scenario where there is an object with its internal state. The internal state of this object is subjected to changes with time. Consider other objects which needs to be updated as soon as the state of the former object changes. Following are the possible ways to go about it:

1. Polling → Objects that are dependent on that state can try polling the object with state about any changes it might have. When polling, the object will return a boolean value.
   1. If the value returned is `true`, the dependent object will call methods on the object to fetch the required state data.
   2. If the value returned is `false`, the dependent object will not do anything.
2. Push Based → The object whose internal state is subjected to changes with time should notify the other objects when its state changes. Here, we will need to register the dependent objects with it for it to be able to notify them.

### Solution

- Here, every dependent object (aka observer) can implement a common Interface. This interface will require them to implement a common method like the one named `update()`. Idea is, when we are registering these observers with the observable, the observable should be able to loop on the observers whenever its internal state changes, and hence should be able to notify them about these changes.
- Further, the idea can now be enhanced further depending on application-specific use-case:
  1.  Observable calls the `update()` method of the observers with the new state passed to it. Here, the observers can implement the `update()` method such that it accepts the updated state, and does something with it.
  2.  Another way is to instantiate the Observer with an instance of the Observable. This means, that observer class accepts an instance of the observable in its constructor. Furthermore, whenever the observable calls the `update()` method of observers, since observers have an instance of the observable, they can just pick the necessary data directly from the observable instance. This means, `update()` method does not accept any data, but only acts as a source of notification of data changes.

### Solution (Example based)

- Consider an example where there is a `WeatherStation` class. This object has the weather data with it which is subjected to changes over time. Along with this class, we have various other classes that are used to express or display this data. This could be `BillboardDisplay`, `MonitorDisplay`, etc.
- Here, the observers are the display classes, and the station class is the observable class. Now, as & when the weather changes, the displays want to be notified about this update so that they can show the updated data.

```tsx
interface TypeOneObserver {
  update(): void;
}

class TypeOneWeatherStation {
  _observers: TypeOneObserver[] = [];
  state: any = null;

  add(observer: TypeOneObserver): void {
    this._observers.push(observer);
  }

  remove(observer: TypeOneObserver): void {
    this._observers.remove(observer);
  }

  notify(): void {
    this._observers.forEach((observer) => observer.update());
  }
}

class BillBoardDisplay implements TypeOneObserver {
  weatherStation: TypeOneWeatherStation;

  constructor(observable: TypeOneWeatherStation) {
    this.weatherStation = observable;
  }

  display(data: any): void {
    // Does something to update the display
  }

  update(): void {
    const newData = weatherStation.state;
    this.display(newData);
  }
}

// Client Side Initiation
const weatherStation = new TypeOneWeatherStation();
const billBoard = new BillBoardDisplay(weatherStation);
weatherStation.add(billBoard);
```

```tsx
interface TypeTwoObserver {
  update(state: any): void;
}

class TypeTwoWeatherStation {
  _observers: TypeTwoObserver[] = [];
  state: any = null;

  add(observer: TypeTwoObserver): void {
    this._observers.push(observer);
  }

  remove(observer: TypeTwoObserver): void {
    this._observers.remove(observer);
  }

  notify(): void {
    this._observers.forEach((observer) => observer.update(this.state));
  }
}

class BillBoardDisplay implements TypeTwoObserver {
  display(data: any): void {
    // Does something to update the display
  }

  update(newData: any): void {
    this.display(newData);
  }
}

// Client Side Initiation
const weatherStation = new TypeTwoWeatherStation();
const billBoard = new BillBoardDisplay();
weatherStation.add(billBoard);
```

### How it solves?

- For a use-case where an observer depends on the observable’s state, using the Observer Pattern provides a consistent pattern where the relationships are established using interfaces. In this case, the interface of observer is the one used in observable to call its method to push updates.
- Unfortunately, even though object level relationships are discouraged, it is something that is required in this pattern. Here, the relationship can be 2-way, or can be 1-way depending on application-specific use-case.

### Pros

1. Provides a consistent pattern for a specific use-case.
2. Dependency injection eases out the process of testing.

### Cons

1. Object level relationships are created.
