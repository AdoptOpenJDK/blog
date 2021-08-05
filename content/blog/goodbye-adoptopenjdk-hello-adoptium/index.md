---
title: Good-bye AdoptOpenJDK. Hello Adoptium!
date: "2021-08-02T09:00:00+00:00"
author: tsc
description: AdoptOpenJDK has moved to Eclipse Adoptium. A few words on how we are supporting the transition to Eclipse Temurin.
tags:
  - AdoptOpenJDK
  - "Eclipse Foundation"
  - "Eclipse Temurin"
---

The move from AdoptOpenJDK to [Eclipse Adoptium](https://projects.eclipse.org/projects/adoptium) is now complete.  The same great community that brought you high quality Java binaries for the last four years at AdoptOpenJDK is now fully productive at [Adoptium](https://github.com/adoptium).

To ensure a smooth transition we will keep the [AdoptOpenJDK website](https://www.adoptopenjdk.net) and the [AdoptOpenJDK API](https://api.adoptopenjdk.net/q/swagger-ui/) active for some time to come, and we are retaining the old [archived AdoptOpenJDK builds](https://adoptopenjdk.net/archive.html) - though we recommend you always use the latest build in production which can now be found at [adoptium.net/releases](https://adoptium.net/releases).

A couple of words about changes you may see as you move from AdoptOpenJDK to Adoptium.

### Terminology

Here at AdoptOpenJDK, our community, project, and runtime product were all simply called “AdoptOpenJDK”. That reflected our founding focus on producing high-quality OpenJDK binaries, and the name has served us well for the last few years.

Within Eclipse we have introduced a bit more structure to allow for growth into new areas.

_Eclipse Adoptium_ is the name of the top level project (TLP) that brings all our endeavours together. This TLP is supported by the _Adoptium Working Group_ of members who provide resources and guidance to all the Adoptium projects’ undertakings. The familiar Java SE runtime is produced by _Eclipse Temurin_ - a sub-project of the Adoptium TLP alongside the other [Adoptium sub-projects](https://projects.eclipse.org/list-of-projects?combine=adoptium&field_project_techology_types_tid=All&field_state_value_2=All), _Eclipse AQAvit_ for quality assurance, _Eclipse Temurin-compliance_ for JCK testing, _Eclipse Mission Control_, and the _Eclipse Adoptium Incubator_ for innovative experimentation. We hope to grow the scope of projects under the Adoptium family over time.

When speaking of our Java SE delivery, we prefer to say the Eclipse Temurin runtime produced by the Adoptium community.

### Quality and Compliance

Adoptium has a greater focus on vendor collaboration than ever before. Our world-leading quality tests suite “[AQAvit](https://projects.eclipse.org/projects/adoptium.aqavit)” has been enhanced to define the highest levels of release quality assurance, and is now used by multiple vendors to demonstrate that their binaries are well-built and ready for running critical workloads in production.

Furthermore, the Eclipse Foundation has secured a license to Oracle’s Java SE TCK, which is used to determine compatibility with the Java specification. The Temurin binaries will now not only pass AQAvit tests but also pass the Java SE TCK for added confidence of interoperability and conformity to standards. We are delighted to add this new layer of assurance to the Adoptium family.

### OpenJ9 builds

Part of Eclipse’s agreement [governing](https://projects.eclipse.org/projects/adoptium/governance) the use of the Oracle Java SE TCK, requires that Adoptium does not release OpenJ9-based or GraalVM-based runtimes. We know that OpenJ9 builds were very popular at AdoptOpenJDK, and we are delighted to report that IBM has stepped in to provide [equivalent builds directly from their website](https://ibm.com/semeru-runtimes).

Adoptium has plans to distribute multiple vendor builds of OpenJDK in the near future, so keep an eye on [the Adoptium blog site](https://blog.adoptium.net/) for more information about that exciting adventure.

### Transitioning to Adoptium Temurin builds

Many people depend upon the [AdoptOpenJDK API](https://api.adoptopenjdk.net/) to retrieve their Java runtimes, so in order to facilitate the smooth transition from AdoptOpenJDK to Adoptium we have created an [Adoptium API](https://api.adoptium.net/) that is directly equivalent to the one you use already. Please migrate to using this new API as soon as possible.

**For a limited period of time** we will augment the current **AdoptOpenJDK API** to serve binaries built from the Eclipse Adoptium community (Hotspot builds) and IBM (OpenJ9 builds). When you ask the current AdoptOpenJDK API for the latest ‘hotspot’ build by ‘adoptopenjdk’ we will serve you the latest Temurin build, and when you ask for the ‘openj9’ build by ‘adoptopenjdk’ we will serve you the IBM build. The licenses and content of these builds are unchanged. Although arguably that behavior is incorrect for the query, we think that is what most people would expect to get during the transition.

The same is not true in the other direction. We will not move the archived AdoptOpenJDK builds to Eclipse, since we wish to be clear that all releases available from Adoptium are both AQAvit and JCK tested, and have passed the enhanced Eclipse release process scrutiny.

We haven’t decided how long to continue this transition period. We will be driven by the data obtained from our API users, but expect it will be weeks/months, not hours/days!  For full details about changes to the AdoptOpenJDK and Adoptium APIs join us on the [#api Slack channel](https://adoptium.slack.com/archives/CFUJV9XV0).

### See you at Adoptium!

The first release of Temurin 8, Temurin 11, and Temurin 16 are available from [adoptium.net](https://adoptium.net/releases.html) now.

This is the result of a huge amount of effort by many people in order to transition such a large project while hitting the regularly scheduled release dates. A big thank you to the Eclipse Foundation staff for being with us and supporting us at every step of the journey, a thank you to our wonderful and diverse community of developers who have patiently worked throughout a period of significant change while remaining productive and innovative throughout, and thank you to you our users who have put your trust in the project and use the software in ways that make us all very excited.

Last but not least thank you to the [London Java Community](https://londonjavacommunity.co.uk/) for being the most welcoming hosts to the project since its inception in 2017. We are very excited about the new opportunity at the Eclipse Foundation.

[Join us on Slack](https://adoptium.net/slack.html) or the [mailing list](mailto:temurin-dev@eclipse.org) for any questions about the transition from using AdoptOpenJDK builds to Adoptium’s Temurin builds, or anything else about the work of the Adoptium project.
