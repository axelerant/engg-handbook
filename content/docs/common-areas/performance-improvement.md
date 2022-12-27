---
title: Dealing with Performance of a web application
weight: 8
description: This section talks about the ways to deal with the performance of a web application. It is important to understand that 'dealing with performance' shouldn't be the last step of building a website, instead its an ongoing process. The performance of the website should be measured & improved at almost every step of development & deployment.
---

# Dealing with Performance of a web application

This section talks about the ways to deal with the performance of a web application. It is important to understand that 'dealing with performance' is not the last step of building a website, instead it is an on-going process. The performance of the website should be measured & improved at almost every step of development & deployment. Whether the user who has visited the website will come back to the website or not, depends upon the following factors -

- Appearance of the website. (the look & feel)
- The user experience. (user interaction with the website)
- Performance of the website. (ex. page load speed, time taken by the website to fetch & display some content, generate the page with the listing of the content based upon certain filters, etc.)

The factors are not limited to the ones mentioned above but these are some of the major concern areas when it comes to dealing with the performance of a website. Let's first understand the ways that could be used to measure the performance of the application and then we will focus on the ways to improve it.

## Ways to measure the performance of the application 

The performance of the application cab be measured using various open source tools available that can help measure the performance based upon the following common metrics - 

- Page Load Speed
- Time to Title
- Time to interact
- First Contentful Paint (FCP)
- Last Contentful Paint (LCP)
- Time to start render
- DNS lookup speed

Some of the top open source tools to measure the performance are as follows - 

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
