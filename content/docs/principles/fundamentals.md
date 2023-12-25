---
title: Remember the Fundamentals
weight: 3
description: We balance the value of getting started quickly with a robust understanding of the fundamentals.
---

# Remember the Fundamentals

There's a saying that goes you can't build your home on an uneven foundation. This is strongly mirrored in many scientific disciplines, and while software engineering is a lot more forgiving than those disciplines, that doesn't make it unimportant. It makes it even more important to stress those fundamentals because one can survive in this industry for a long time without worrying about them. That's not who we are at Axelerant.

{{< blockquote quote="We balance the value of getting started quickly with a robust understanding of the fundamentals" >}}

## Understand the technology deeply {#technology}

{{< blockquote author="Arthur C. Clarke" quote="Any sufficiently advanced technology is indistinguishable from magic." >}}

We are engineers, and we dig below the magic to see what makes the technology work. "It just works that way" is not far from "It _always_ works that way," and that is not something we take for granted at Axelerant. We understand why things work the way they do. We learn and build our knowledge every day. Our customers rely on us to solve their technological problems, and we can't do that without understanding the technology.

The above should not be read to mean that we obsess over technology. We use suitable abstractions to help us think about technology more effectively. But we are aware that there are abstractions and what they look like. We are aware of what they might mean for our choices of technology and how, ultimately, they affect the customer.

{{< blockquote quote="Ours is a learning journey" >}}

### Understand how computers work {#computers}

We write programs to tell computers how to solve a problem. To do that well, we have to understand how computers work. How does the computer interpret our code? How does it work with data? How does memory work? How do networks work? Each of these questions leads to deep rabbit holes and there are a lot more questions like these that we have to deal with.

We can't be productive if all we do is explore these rabbit holes. But we have to know enough about these topics to ask meaningful questions and learn.

#### Understand time and space complexity {#complexities}

The computer takes a certain number of CPU cycles when it executes an instruction we wrote in the code. Every variable that we create consumes a certain amount of memory. So, we assess the solution we wrote to solve a problem. It should be fair on the computer whether the number of data is less or more.

### Understand how the Internet works {#internet}

Axelerant focuses mainly on web development and understanding how the Internet works is critical. What is the Internet? How are the networks built? How do two computers on opposite sides of the planet talk to each other? How does the web work? What is HTTP? How do browsers work? What are the common things browsers do to speed up a user's experience? The list is endless and we can only learn if we look out to learn.

### Understand how operating systems work {#os}

All computers, that is to say, our laptops, our phones, and the servers we may be working with use an operating system. The code we write will run in that context. So we need to know enough about the operating system that affects our code. How does an operating system organize files? How does it deal with processes? How does it run long-running processes (such as servers)? How does it deal with memory management? How does it deal with security?

### Understand programming languages {#languages}

We use a language to talk to the computer and they come in all shapes and sizes. It's important we know what questions to ask to understand a programming language better. What paradigm does it follow? Does it enforce a type system? How does it find an entry point in our code? How deeply does it let us interact with our machine? How does our code get invoked? What resources are available to our code while it's running?

#### Distinguish types of programming languages {#language-types}

Classifying programming languages according to their traits is a good way to understand what language would be a good choice for a problem. Languages often get classified based on their flow model and how they organize memory (functional, procedural, object-oriented). There are other ways to classify languages and it is useful to understand a variety of their types. Some of these are listed below:

- Procedural, object-oriented, or functional
- Interpreted or compiled
- High-level or low-level
- Server-side or client-side
- General or specialized

### Understand design patterns and SOLID principles {#design-principle}

{{< blockquote quote="Change is the only constant" >}}

Making changes in software will cause havoc if it is not well-designed. Some of the best software engineers came up with design patterns and SOLID principles after they kept repeating the same mistake. Understanding them will help us to write software that is more adaptable to change.

## Understand why we use anything {#anything}

It is easy to get lost in the world of technology and solve problems that don't exist. It is important to be reminded that all we do is to help our customers, either directly or indirectly.

{{< blockquote quote="Understand the fundamentals and make a sound decision on what to use and how." >}}

## Working with source code {#source-code}

All the code we work on must be in version control. We use git almost universally and we need to understand how it works and how to perform common actions using it (such as committing files, switching branches, merging branches, etc.) When leading teams, we also need to understand some of the more advanced actions such as resolving conflicts, rebasing, cherry-picking, and more. Fortunately, there are hundreds of resources to help us learn git and we can't go wrong in starting with the official book.

### Reading vs Writing code {#reading-code}

The code that we write will be read many more times and executed a lot more times. Optimize our code for reading and execution.
