---
slug: "consistent-sub-pixel-rendering"

title: "Consistent sub-pixel rendering"
description: "Achieve consistent sub-pixel rendering across browsers with improved readability"
date: 2023-12-24
image:
  {
    src: "/src/assets/images/article/browsers.png",
    alt: "Image of Browser Icons",
  }
tags: ["CSS"]
featured: true
---

### Browsers are inconsistent.

Many of us have experienced the frustration of seamlessly developing a new feature, only to switch browsers and notice subtle differences in the appearance of certain elements.

If we are lucky, we find a StackOverflow question with the exact same issue. If we are very lucky, there's an answer which is either accepted, or has high number of upvotes. And this unfortunate luck prevents us from going the extra mile in understanding the issue.

#### But Why?

There's _no_ evil group of people behind these browsers who wants to make the life of web-developers hard. [W3C (World Wide Web Consortium)](https://www.w3.org/) establishes these web-standards, but there is always a **room for interpretation** in how these standards are implemented.

If you find it hard to relate, just **imagine W3C as your Product Manager**. Even though they give you standard set of specifications, there's still room for interpretation. Every developer might interpret these minor details differently, and that's your web-browsers in this case.

In this instance, it's not solely interpretation that is at fault. There can be multiple other reasons like:

1. **Different rendering-engines** - Different browsers use different rendering-engines to interpret & display web-pages. For example, Chrome uses Blink, Firefox uses Gecko & Safari uses WebKit. These engines have their own implementations of the web-standards.
2. **Performance considerations** - Browsers optimize their rendering-engines for speed & efficiency which leads to differences in how certain features are implemented.
3. **Platform-specific features** - Browsers behave differently on different operating systems. A classic example of this is iOS. Every browser on iOS is built on top of WebKit.
4. **Legacy support** - Browsers try to maintain backwards compatibility. This means, they have to support websites working with different browser quirks. This leads to differences in how new features are added to accomodate legacy one's.
5. **Others** - There's other reasons like vendor-prefixes, competition which also lead to differences.

<!-- <br/>

**TLDR is, browsers are inconsistent, and it's the hard truth which needs to be accepted.** -->

<hr/>

#### What is sub-pixel rendering?

<u>Sub-pixel rendering is a case where a dimension or a position has a value which is less than a pixel.</u> Let's say, we have a **`div` with width 23.9 pixels**. How should this `div` be rendered considering the **screen can only show either 23 or 24 pixels?**

Here's a few possible solutions! You might have thought of one of these,

1. _Show 23 pixels (**round-down**)_
2. _Show 24 pixels (**round / round-up**)_
3. _Show 23 pixels, but make the 24th pixel a lighter shade of black, maybe grey (**anti-aliasing**)_

_This is a classic example where the solution is subjective. There's no right or wrong solution, and that's what interpretation is all about._

Sub-pixel rendering is a more nuanced case where its not just the browser, but also the operating system involved. Windows uses ClearType, while MacOS uses Quartz.

But let's talk browsers. What if we can have the browsers interpret it in a similar way?

<hr/>

### Solution?

Let's use the example of **line-height** to illustrate the solution, as it is a property that often results in sub-pixel values. I think the industry has agreed that **line-height** should ideally be a **unitless** value. If you are not aware of this, here's a really good [article](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/) about it.

Often designers present us with Figma's which have both the **font-size** & **line-height** as **px** values. Now, to make it unitless, we <u>divide line-height (px) with font-size (px)<u/>, which doesn't always give an integer value.

Consider a case where **font-size** is **14px** & **line-height** is **24px**. In this case, to represent **line-height** as a unitless value, we come up with `24 / 14 = 1.7142857...`. Let's try this in different browsers & see if we can match the results with Figma, and across browsers,

**Firefox** - `line-height: 1.7` - causes actual height of `23.8px`\
**Chrome** - `line-height: 1.7` - causes actual height of `23.8px`

_`line-height: 1.7` is consistent across browsers, but inconsistent with Figma._

**Firefox** - `line-height: 1.71` - causes actual height of `23.9333px`\
**Chrome** - `line-height: 1.71` - causes actual height of `23.9333px`

_`line-height: 1.71` is again consistent across browsers, but inconsistent with Figma._

**Firefox** - `line-height: 1.714` - causes actual height of `24px`\
**Chrome** - `line-height: 1.714` - causes actual height of `23.988px`

_`line-height: 1.714` is inconsistent across browsers, but only Firefox is consistent with Figma?_

> Issue is, with different levels of precision values, we expect browsers to use their interpretations in helping us, but its the interpretations which are inconsistent.

But what if, we give them exactly the same values?

**Firefox** - `line-height: calc(24 / 14)` - causes actual height of `24px`\
**Chrome** - `line-height: calc(24 / 14)` - causes actual height of `24px`

**🎉 Voila! That worked! This is consistent with Figma as well as across browsers. 🎉**

<hr/>

### Takeaway

If we have a calculation in mind, its usually best to provide raw numbers to the browser as it reduces the scope for the browser to use its own interpretations, hence making the behaviour consistent across browsers.

This not only makes it consistent, but also improves the readability & maintainability.

##### Readability

Since we know for the fact that **line-height (unitless)** is represented as **line-height (px) / font-size (px)**, by representing it as `calc(24 / 14)`, we improve the readability as its clear that **line-height was intended to be 24px**, and **font-size was intended to be 14px**.

##### Maintainability

Now with improved readability, we automatically improve the maintainability. Let's say, 6 months later, designers thought of increasing the **font-size** to **16px**. Well, to get the line-height working correctly, all we need to do is change `calc(24 / 14)` to `calc(24 / 16)`.

**<center>Its easy to convert fractions into decimals, but hard to convert decimals into fractions.</center>**

And that's all about consistent sub-pixel rendering across browsers. Its just about **not** making the inputs subjective :)
