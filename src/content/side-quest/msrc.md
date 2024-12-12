---
slug: "microsoft-azure-bug-bounty"
title: "Microsoft Azure Bug Bounty"
description: "Identified and reported an Information Disclosure bug in Azure DevOps. Rewarded with a $5000 bounty."
image:
  {
    src: "/src/assets/images/side-quest/msrc-hero.png",
    alt: "(MSRC) Cover Image",
  }
---

### Introduction

Picture a typical workday, one filled with routine tasks and a scheduled retrospective call. Little did I know that this everyday scenario would unveil a simple yet quirky bug in Azure DevOps.

As the retrospective call kicked off, our team delved into the usual routine of sharing thoughts and feedback. Our company used Azure DevOps, and naturally, we used their platform for conducting the team retrospective. Our team had been utilizing anonymous retros for quite some time, and we stuck to the same one for this session as well.

I began adding a few feedback points and was intrigued by the fact that feedback from the team was dynamically loading while I typed my feedback points. I wondered, is this websockets, or some sort of polling? To find answers to my questions, I opened the network tab.

### Discovery

In the network tab, I started going through the responses related to retrospectives. To my surprise, I found that each feedback point was associated with some sort of user-id. At first, I thought this must be **hashed**, or maybe **encrypted**, or perhaps not even the user's user-id, just some **odd naming**.

But suddenly, a thought crossed my mind. **Assuming it is the actual user-id, it doesn't matter if it's encrypted or hashed; it must be the same for the user across API calls.**

### Realisation

With that in mind, I suddenly started navigating across the Azure DevOps dashboard, trying to find a place that lists some or all people in the retrospective. In a couple of minutes, I found a pull request that had a bunch of us as reviewers. Now, it was time to check the API responses.

And, I was correct. The API response had the same **user-id**, and in this case, the response also included the user's name! I was so surprised by my little discovery that I amusingly shared this vulnerability in our retro call's chat.

### Impact

The bug, though a straightforward case of **information disclosure**, took on heightened gravity due to its presence in the retrospective board. This platform serves as the focal point where teams may openly convey uncomfortable feedback, allowing individuals to express even the most challenging sentiments with the assurance of _anonymization_. Such a vulnerability could have profound implications for someone in the broader context.

### Action

At the time, I was not very serious about this and almost considered it to be a minor bug. But, regarding the message I had sent in the retro-call's chat, one of my fellow engineers suggested me to file the issue in Microsoft's Bug Bounty, saying I might have a chance at winning something.

Following the advice, I submitted the bug through the **MSRC** Portal. A few months later, I received an email confirming the bug's **authenticity** and the associated **bounty**. Moreover, this achievement earned me a spot on the **2022 Q3** and **2023 Annual** [leaderboard of MSRC](https://msrc.microsoft.com/leaderboard)!
