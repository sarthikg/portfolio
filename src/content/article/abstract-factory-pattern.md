---
slug: "abstract-factory-design-pattern"

title: "Abstract Factory Design Pattern"
description: "Abstract Factory Design Pattern is an extension of the typical factory design pattern in a way that it allows for creation of multiple product types."
date: 2023-12-24
image:
  {
    src: "/src/assets/images/article/browsers.png",
    alt: "Image of Browser Icons",
  }
tags: ["Low Level Design", "Creational Pattern"]
youtube: "https://www.youtube.com/watch?v=v-GiuMmsXj4"
featured: false
---

### Problem Statement

- Consider a case where multiple products are closely tied to each other. This can be illustrated with an example. Consider we are building a native application which works on Windows, MacOS & Linux. In this application, for all the platforms, the elements required will be similar, but they might vary in their designs or implementations a bit.
- For every platform, the application will have a Button, Input-Field, Alert, etc., but all of these elements will differ a bit for each platform. A button for windows might not be similar to a button for mac, etc.
- Here, we can use factory pattern to generate these elements. But, factory method doesn’t prevent the client from generating a button for MacOS, and a input-field for windows. We need a solution such that a single factory is able to generate elements only related to a single platform.

### Solution

In contrast to the factory pattern where there was a single `getProduct()` method, abstract-factory extends the functionality in a way the factory can generate multiple product types. Hence, an abstract-factory will have multiple `getProduct()` methods in it, each responsible for returning a type of element.

### Solution (Example based)

- In the above described example, we can have factories for every platform. This means, `MacOSFactory`, `WindowsFactory` & `LinuxFactory` will be the concrete implementations of the `Factory` interface.
- Also, the `Factory` interface will have methods like `getButton()`, `getInputField()`, `getAlert()` which return the actual product instance that needs to be used in the UI.

```tsx
interface Button {}
interface InputField {}
interface Alert {}

class MacOSButton implements Button {}
class MacOSInputField implements InputField {}
class MacOSAlert implements Alert {}

class WindowsButton implements Button {}
class WindowsInputField implements InputField {}
class WindowsAlert implements Alert {}

interface AbstractFactory {
  getButton(): Button;
  getInputField(): InputField;
  getAlert(): Alert;
}

class MacOSFactory implements AbstractFactory {
  getButton(): Button {
    return new MacOSButton();
  }
  getInputField(): InputField {
    return new MacOSInputField();
  }
  getAlert(): Alert {
    return new MacOSAlert();
  }
}

class WindowsFactory implements AbstractFactory {
  getButton(): Button {
    return new WindowsButton();
  }
  getInputField(): InputField {
    return new WindowsInputField();
  }
  getAlert(): Alert {
    return new WindowsAlert();
  }
}

// Client-Side Initiation
const factory: AbstractFactory =
  2 > 1 ? new MacOSFactory() : new WindowsFactory();
const button = factory.getButton();
const inputField = factory.getInputField();
const alert = factory.getAlert();
```

### How it solves?

- In this pattern, the family of products are grouped under the concrete implementations of the factory. This makes sure that the client requesting the products only get the family of products together. This means, using the abstract factory pattern, if a client is initialising a `MacOSFactory`, they will only get the MacOS compatible elements including button, input-field & alert. There is no way a client can get a `MacOSButton` with a `WindowsInputField`.
- The control of grouping is abstracted away from the client, and is pushed into the concrete factories.

### Pros

1. Helps in grouping families of products.

### Cons

1. Support for adding new products is a bit tedious. Adding a new product requires updating the `AbstractFactory` interface with a new method, and hence requires an update for all the existing subclasses, i.e. existing factories.
