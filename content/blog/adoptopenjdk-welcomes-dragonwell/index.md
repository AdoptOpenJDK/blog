---
title: AdoptOpenJDK Welcomes Dragonwell
date: "2020-11-10T12:00:00+00:00"
author: andreasahlenstorf
description: With Alibaba Dragonwell, another flavour of OpenJDK is being built at and distributed by AdoptOpenJDK. Dragonwell is a TCK-certified implementation of Java for large-scale application deployments on Alibaba Cloud and elsewhere.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce that Alibaba decided to join forces with us by building and distributing their [Dragonwell JDK](http://dragonwell-jdk.io/) on our infrastructure. For our users, this means more choice, mainly because Dragonwell offers some exciting features that are unique to Dragonwell. One example is [Wisp](https://github.com/alibaba/dragonwell8/wiki/Wisp-Documentation) that implements coroutines on the JVM.

Over the next weeks, the first releases of Dragonwell 8 and 11 are going to appear on AdoptOpenJDK's website alongside our existing binary offerings. Dragonwell can be consumed like any other binary release by AdoptOpenJDK. The Dragonwell team will also introduce Dragonwell JDK and its unique features in a series of blog posts. Stay tuned!

Dragonwell is a flavour of OpenJDK (like AdoptOpenJDK!). It is a TCK-certified [[1](#fn-tck)<a name="fn-tck-ret"></a>] implementation of Java for large-scale application deployments on Alibaba Cloud and elsewhere. As such, it is a drop-in replacement for any other OpenJDK variant and compatible with all the tools you know, like JDK Flight Recorder and JDK Mission Control.

---

1. Alibaba<a name="fn-tck"></a> performs the TCK certification, not AdoptOpenJDK. [↩︎](#fn-tck-ret "Go back to footnote 1 in the text")
