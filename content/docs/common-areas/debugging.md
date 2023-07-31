---
title: Debugging 
weight: 3
description: Debugging an application. 
---

# Debugging

Debugging is an important part of web development activity and probably will consume most of a web developer's time. Hence, Axelerant tries to promote the following pragmatic principles and thoughts regarding debugging.

* Bugs are part of the software development process, and it can be due to misunderstood requirements or due to coding errors.
* No one writes perfect code and hence it should be accepted that there will be bugs and hence debugging will consume
most of your time.
* There is no need to be emotional about bugs in code and debugging should be considered a problem-solving activity.
* To begin debugging you need to be in a debugging mindset, removed from your ego and project pressures, and it should
be considered as a problem-solving activity.
* The first rule of debugging is not to panic.
* Try to resist the temptation to address the symptoms of the bug and focus on locating the root cause of the bug.
* When starting to debug ensure that you are working on a clean system that helps you to focus only on the bug at hand.
* You need to be accurate in your observations and should also gather as much data regarding the behaviour of the bug as possible.

The following approaches must be considered when debugging.

## Reproduce the bug

You can only address a bug that can be reproduced and the first step would be to reproduce the bug as quickly as possible.

## Binary Chop method

This is another form of divide and conquer method. If you encounter bugs in a huge dataset or stack trace and trying to find the function call that broke the code, choose one in the middle and then check if the error-prone code is present
there. Once found, proceed to find the next middle point and repeat the activity.

## Logging/Tracing

Whenever possible use logging and debugging statements to log the state of the program over time. Most debuggers concentrate
on the current state of the program which might not give the complete picture.

## Rubber ducking

This is a strategy where you explain the bug to a friend or coworker who merely listens and noes their head. The very act of explaining the bug forces your mind
to give insights regarding the problem. If a friend cannot be found, use a rubber duck or soft toy instead.

## Process of elimination

Sometimes the bug might be in the OS, an external module or a third party library rather than the application itself. Often
it is more profitable to locate the bug in the application itself rather than external software. Even then you have to eliminate code to reach the problem.

## Debugging checklist

Have a debugging checklist with the following questions.

* Is the problem being reported a direct result of the underlying bug, or merely a symptom?
* Is the bug really in the framework you're using? Is it in the OS? Or is it in your code?
* If you explained this problem in detail to coworker, what would you say?
* If the suspect code passes its unit tests, are the tests complete enough? What happens if you run the tests with this data?
* Do the conditions that cuased this bug exist anywhere else in the system? Are there other bugs still in the larval stage, just waiting to hatch?

## Xdebug

It is advisable to use and familiarise with the most commonly available Debugging tools. In PHP web applications Xdebug is the most widely used debugger. This provides much more options while debugging when compared to print and dump statements. Axelerant encourages the use of Xdebug with the aid of a supported IDE
like PHPStorm for faster debugging.
