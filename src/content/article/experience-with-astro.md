---
slug: "experience-with-astro"

title: "My experience using Astro"
description: "My experience using Astro for building v2 of my portfolio website"
date: 2023-11-12
image:
  {
    src: "/src/assets/images/article/astro.webp",
    alt: "Cover Image of Astro Framework",
  }
tags: ["JavaScript", "TypeScript"]
featured: true
---

### Introduction

I initiated my portfolio website back in February 2021, aiming for a **flashy** yet **minimalistic** design – a goal I successfully achieved.

Back then, **Create React App (CRA)** was the default choice for most, as frameworks like Next.js, Solid, Astro, etc., either hadn't surfaced or hadn't yet captured the limelight.

But there were a few major issues with my website back then,

1. **It wasn't extensible** - The UI was initially crafted based on the available information and looked good at the time. However, as more information needed inclusion, constant redesign became a necessity.
2. **It was resource-heavy** - The inclusion of a marquee for the skills section resulted in a heavyweight animation. This, unfortunately, led to frame drops even on reasonably powerful systems.

Therefore, with the need to incorporate additional information, a redesign became imperative, ultimately driving the development of version 2.0.

For version 2 of my portfolio, my primary objectives were:

1. **Extensibility** - This was more of a design requirement
2. **Ease of Maintenance** - Involved decision around CSR vs SSR vs SSG
3. **Lightweight Structure** - Optimise the assets & ship as little js as possible.

### Why Astro?

The web development landscape is ever-evolving, and as I pen down this article, new frameworks are likely emerging.

Among the plethora of frameworks out there, Astro stood out to me for the following reasons:

1. **Positive Reviews** - Astro garnered a lot of praise from Youtube & Tech-Twitter, atleast for my use-case.

2. **Emphasis on Content-Driven Websites** - Astro marketed itself as the web-framework for content-driven websites, which aligned with me.

3. **Flexible Rendering Options** - Astro's support for SSR and CSR, with a default preference for SSG, perfectly aligned with my requirements.

4. **Ease of Use with Concise Documentation** - The accessibility and minimal documentation of Astro made it easy to dive into without an extensive learning curve.

I hold the belief that things should not be overcomplicated unless necessitated. The ease of managing a static website surpasses that of a SSG website, which, in turn, is simpler than managing a SSR website.

**<center>Less moving parts, the better.</center>**

Considering this, Astro made perfect sense for me as it enabled the judicious use of these features based on specific requirements.

### What I liked about Astro?

Using Astro was a **breeze**. The **speed** at which I could develop was **astonishing**. It took me just _four days_ to complete the major components of the portfolio website.

#### UI Features

With Astro, creating a SSG website was **effortlessly seamless**. It was configured to work in SSG mode by default, eliminating the need for any additional effort on my part.

In instances where I needed snippets of client-side JavaScript, Astro seamlessly accommodated that. It was as straightforward as incorporating that portion of the code within the `<script/>` tag.

It **supported TypeScript** across the board, supported **scoped-styles**, and what not. In my opinion, it supported everything anyone could have wanted.

#### Server Features

The contact page required an **api-endpoint** which would trigger an email when someone filled the contact form.

Surprisingly, Astro even facilitated this, requiring only a switch in app rendering to hybrid mode.

#### Other Features

Astro also came equipped with additional features such as the `<Image/>` Component, **View-Transitions**, and **Content-Collections**, which significantly eased the development process.

With all these features in the arsenal, the final website was **optimized**, while providing a **seamless** and **enjoyable** user experience.

### What I disliked about Astro?

Despite positive reviews on Twitter and YouTube, it's essential to note that the framework still has a **few rough edges**. The primary challenge lies not so much in these rough edges but more in the dated or **missing documentation** for certain features.

Here's a few issues I faced during development:

1. Importing CSS files ended up rendering different results in development & production.
2. Content-Collections misses bits & pieces of documentation around working with individual pieces of data.
3. `<Image/>` Component lacked serious documentation, and making it work was more of a pain. This includes missing typing support for it.
4. `<Image/>` Component has weird edge-case where it worked in development at times, but not in production.
5. `<Image/>` Component has compatibility issues with different deployment services. This includes delay in Netlify, paid support in Cloudflare, etc.
6. View-Transitions had issues with client-side scripts for components being used across pages of the application.
7. Lifecycle events associated with View-Transitions had unexpected behaviour where they fired off after images were loaded on the page.
8. View-Transitions in-general felt like a half-baked idea, not generally from Astro's implementation perspective, but the raw spec in general.

I want to clarify that my intention is not to criticize the framework. Rather, I aim to highlight the fact that, like any tool, **it does have a few rough edges**.

### Conclusion

I thoroughly **enjoyed** working with Astro throughout the week or two that I dedicated to building this website.

Aside from encountering a few rough edges, I didn't find myself needing to Google or delve extensively into the documentation. An initial read-through proved to be sufficient for most of the development process.

Additionally, I've never experienced such a **swift pace** in developing a website from scratch. Astro truly facilitated an **efficient** and **accelerated** development process.

Speaking of the portfolio, I'm pleased with how it turned out. Acknowledging my limited design skills, I drew significant inspiration from [Zeno Rocha's portfolio](https://zenorocha.com/).
