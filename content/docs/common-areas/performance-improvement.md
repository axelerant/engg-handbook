---
title: Performance of a Web Application
weight: 8
description: Performance improvement shouldn't be the last step of building a website, instead it is an ongoing process. The performance of the website should be measured and improved at almost every milestone of development.
---

# Performance of a Web Application

Performance is a multifaceted and nuanced topic, particularly for web applications, where many factors come into play due to the complexity of the web ecosystem. The performance of a web application involves considerations like physical proximity, network efficiency, application delivery, server and client runtime, and the design styles of the application itself.

Performance improvement should not be an afterthought but an ongoing process, evaluated and enhanced at every development milestone. Whether a user returns to a website depends on several key factors:

- **Appearance**: The overall look and feel of the website.
- **User Experience**: How users interact with the website, such as through forms or other interactive elements.
- **Performance**: Metrics like page load speed, content fetch and display times, and how quickly pages generate based on user inputs.

These are major areas of concern, though not the only factors influencing website performance. Let’s explore how to measure and improve performance effectively.

## Measuring Application Performance

Performance can be gauged using various open-source tools, which assess common metrics like:

- Page Load Speed
- Time to Title
- Time to interact
- First Contentful Paint (FCP)
- Last Contentful Paint (LCP)
- Time to start render
- DNS lookup speed

Some top tools for measuring performance include:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [KeyCDN Website Speed Test](https://tools.keycdn.com/speed)
- [Solarwinds Pingdom Speed Test](https://tools.pingdom.com/)
- [Uptrends](https://www.uptrends.com/)

## Debugging Performance Issues

Ideally, performance metrics should be monitored throughout development. However, performance often becomes a focus only when the application’s response time exceeds acceptable limits. At this stage, tools like those mentioned above can provide initial insights, but deeper analysis may be required to identify the root cause of “slowness.”

For example, you might need to analyze:

- Function calls on the page
- Custom queries for data retrieval
- Data processing or sanitization
- Embedded codes

Widely adopted tools for performance analysis include:

- [Web profiler](https://www.drupal.org/project/webprofiler)
- [XHprof](https://www.drupal.org/project/xhprof)
- [New Relic](https://newrelic.com/)
- [Blackfire.io](https://www.blackfire.io/)
- [Xdebug](https://www.drupal.org/docs/develop/development-tools/xdebug-debugger)

## Compressed CSS/JS

Compressed CSS/JavaScript refer to techniques that reduce the size of CSS and JavaScript files, optimizing website performance. Compression leads to faster load times, reduced bandwidth usage, and less server strain by minimizing file size and HTTP requests.

Additionally, using source maps allows developers to retain original, uncompressed code during development, making debugging more manageable even when deploying compressed versions to production.
