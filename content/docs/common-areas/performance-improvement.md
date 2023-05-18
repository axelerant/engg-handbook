---
title: Performance of a Web Application
weight: 8
description: Performance improvement shouldn't be the last step of building a website, instead it is an ongoing process. The performance of the website should be measured and improved at almost every milestone of development.
---

# Performance of a Web Application

Performance and its improvement is a complicated and nuanced topic. For a web application, there are many aspects of performance because web is a complex system. The performance of a web application involves issues concerning physical proximity, network, application delivery, runtime on the server and the client, and varying design styles of the application itself.

Performance improvement shouldn't be the last step of building a website. It is an ongoing process and it should be measured and improved at almost every milestone of development. Whether the user who has visited the website will come back to the website or not, depends upon the following factors:

- Appearance of the website (the look and feel)
- The user experience (user interaction with the website, it could be using a registration form or any other form that involves some user interation)
- Performance of the website (ex. page load speed, time taken by the website to fetch & display the content, generate the page with the listing of the content based upon certain filters, etc...)

The factors are not limited to the ones mentioned above but these are some of the major concern areas when it comes to dealing with the performance of a website. Let's first understand the ways that could be used to measure the performance of the application and then we will focus on the ways to improve it.

## Ways to measure the performance of the application

The performance of the application cab be measured using various open source tools available that can help measure the performance based upon the following common metrics:

- Page Load Speed
- Time to Title
- Time to interact
- First Contentful Paint (FCP)
- Last Contentful Paint (LCP)
- Time to start render
- DNS lookup speed

Some of the top open source tools to measure the performance are as follows:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [KeyCDN Website Speed Test](https://tools.keycdn.com/speed)
- [Solarwinds Pingdom Speed Test](https://tools.pingdom.com/)
- [Uptrends](https://www.uptrends.com/)

## Debug performance issues

As discussed above, the ideal way of dealing with the performance of the application is to keep a check on the performance metrics at every stage of development or deployment. But most of the times we think about improving the performance of the application when we notice that the response time of returning the page output is higher than the ideal time.

At this point, we start examining our application using various tools. The tools mentioned above can help in doing the first level analysis of the performance of the application. But to get to the root cause of the "slowness", you may have to take into consideration some advanced tools or get into the database queries to find out what needs to be worked upon in order to improve the performance.

For example -

- Analysing function calls on the page.
- Custom queries written to fetch & display data.
- Data processing or sanitizing.
- Embed codes used.

Some of the extensively used tools for analysing the performance are as follows -

- [Web profiler](https://www.drupal.org/project/webprofiler)
- [XHprof](https://www.drupal.org/project/xhprof)
- [New Relic](https://newrelic.com/)
- [Blackfire.io](https://www.blackfire.io/)
- [Xdebug](https://www.drupal.org/docs/develop/development-tools/xdebug-debugger)

## Compressed CSS/JS

Compressed CSS/JS refers to the technique of reducing the size and optimizing the performance of CSS/JavaScript files. A website can load more quickly, use less bandwidth, and put less strain on the server by compressing its CSS and JS. By minimizing the size of the CSS/JS files and the amount of HTTP requests, compressed CSS/JS helps make a website faster and more effective.

Furthermore, Compressed CSS/JS can make the CSS/JS code more challenging for others to interpret and edit, which can be helpful for defending intellectual property. It is advised to preserve a copy of the original CSS/JS files for development since compressed CSS/JS might also make debugging more difficult.
