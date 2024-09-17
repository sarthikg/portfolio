---
slug: "bridge-pattern"
title: "Bridge Design Pattern"
description: "TBD"
date: 2024-09-17
image:
  {
    src: "/src/assets/images/article/placeholder.png",
    alt: "Image of Bridge Pattern",
  }
tags: ["Low Level Design", "Structural Design Pattern"]
featured: false
youtube: "https://www.youtube.com/embed/F1YQ7YRjttI?si=7r5QmlT04ng7-jTM"
---

### Problem Statement

- Consider a scenario where you have to build a UI layer like that of Spotify to show two different forms of UI. Lets imagine, these UI’s can be either Long-Form View, and Short-Form View.
- Long-Form View shows more details of the selection, while Short-Form View shows less details of the similar selection. These long & short form views can be that of songs, albums, playlists, artists, etc.
- Here, the problem is that, we want to reused similar UI layers for all these different content types, but all the content types have entirely different data to be displayed in the UI layer. For example, an album might have the description, but an artist might have his bio to be displayed in the text field.
- This can be imagined with the below classes:

```tsx
// Entity Classes
class Artist {
  imageUrl: string;
  firstName: string;
  lastName: string;
  bio: string;

  fullName(): string {}
}

class Album {
  coverUrl: string;
  name: string;
  description: string;
}

// UI Layers
class LongFormUILayer {
  getImageUrl(): string {}
  getTitle(): string {}
  getDescription(): string {}

  renderHTML(): string {
    return `${this.getImageUrl()} ${this.getTitle()} ${this.getDescription()}`;
  }
}

class ShortFormUILayer {
  getImageUrl(): string {}
  getTitle(): string {}

  renderHTML(): string {
    return `${this.getImageUrl()} ${this.getTitle()}`;
  }
}
```

- In the above scenario, if we have to pass an instance of either Album or the Artist to any of the UI-Layer class, we will have to make sure that methods in the UI Layer classes get data from those entity specific properties. Like, getting title for an album will require access to its name property, while for artist, it might require to call the fullName method on it.
- The problem intensifies in a way that entity classes cannot be modified to extend similar interfaces or abstract classes since `title` might make sense for album, but not for the artist.

### Solution

[https://witeboard.com/d4bf4ca0-6777-11ee-aa00-292f4b31259b](https://witeboard.com/d4bf4ca0-6777-11ee-aa00-292f4b31259b)

- To get over this problem, the possible solutions we have are:
  1.  Create UI Layer classes specific to every entity. In the above example, it will include the following classes. There’s a few issues with such a pattern like class-explosion, as well as duplicated logic across classes.
      1.  LongFormArtistUILayer
      2.  ShortFormArtistUILayer
      3.  LongFormAlbumUILayer
      4.  ShortFormAlbumUILayer
  2.  Create adapters for the entities to be used inside the UILayer Classes. The adapters will implement an interface, which will make sure that either of these entity adapters can be used by either of the UILayer implementations.
- The second possible solution is what bridge pattern describes. According to the bridge pattern, we can decouple the implementation of the UI Layer from the implementation of the Resource Implementations.

### Solution (Example based)

```jsx
// Entities
class Artist {
	imageUrl: string;
	firstName: string;
	lastName: string;
	bio: string;

	fullName(): string {}
}

class Album {
	coverUrl: string;
	name: string;
	description: string;
}

// Adapters
interface Resource {
	getTitle(): string;
	getImageUrl(): string;
	getDescription(): string;
}

class AlbumResource implements Resource {
	constructor(album: Album) {
		this._resource = album
	}
	getTitle(): string {
		return this._resource.name
	};
	getImageUrl(): string {
		return this._resource.coverUrl
	};
	getDescription(): string {
		return this._resource.description
	};
}

class ArtistResource implements Resource {
	constructor(artist: Artist) {
		this._resource = artist
	}
	getTitle(): string {
		return this._resource.fullName()
	};
	getImageUrl(): string {
		return this._resource.imageUrl
	};
	getDescription(): string {
		return this._resource.bio
	};
}

// UI Layer
abstract class UILayer {
	constructor(resource: Resource) {
		this._resource = Resource;
	}
	renderHTML(): string {}
}
class LongFormUILayer extends UILayer {
	getImageUrl(): string {}
	getTitle(): string {}
	getDescription(): string {}

	renderHTML(): string {
		return `${this.getImageUrl()} ${this.getTitle()} ${this.getDescription()}`
	}
}
class ShortFormUILayer extends UILayer {
	getImageUrl(): string {}
	getTitle(): string {}

	renderHTML(): string {
		return `${this.getImageUrl()} ${this.getTitle()}`
	}
}

// Client-Side Initiation
const shortFormAlbum = new ShortFormUILayer(new AlbumResource(new Album()))
const html = shortFormAlbum.renderHTML()
```

### How it solves?

- The approach with Bridge Pattern makes sure that the individual resources can vary independently, while the UI Layers can be used independently of them using the help of adapters. Usually, adapters are created at a later stage in a product lifecycle when there is an issue of incompatible interfaces, but on the other hand bridge pattern promotes the usage of adapters at the initialisation of a product.
- This also saves us from class explosion, as with increasing number of either UILayers, and/or Entities would cause an exponential increase in the number of classes that would have been needed to cater the use case while also causing tons of code-duplication across the codebase.

### Pros

1. Extensions (Entities) & Abstractions (UI Layers) can be extended individually. This means, adding a new entity, or a UI-layer doesn’t require a change in existing one’s.
2. Implementations can be changed at runtime
3. Reduces the complexity
4. Improves the scope for testing

### Cons

1. It somehow increases the structural complexity of the codebase in the initial phases.
2. It adds overhead in-terms of new classes. Usually the benefit is visible when the number of entities or the ui-layers start increasing.
