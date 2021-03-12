---
title: AdoptOpenJDK 16 Available
date: "2021-03-17T12:00:00+00:00"
author: andreasahlenstorf
description: AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 16. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 16. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested (except AdoptOpenJDK 16 for Windows on ARM, [see below](#adoptopenjdk-for-windows-on-arm)) and available free of charge without usage restrictions on a wide range of platforms.

* [List of changes in OpenJDK 16](https://bugs.openjdk.java.net/browse/JDK-8263045?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%20%2216%22%20ORDER%20BY%20created%20DESC)
* [List of changes in Eclipse OpenJ9 0.25.0](https://github.com/eclipse/openj9/blob/master/doc/release-notes/0.25/0.25.md)

## New and Noteworthy

### Overview of Java 16

* [JEP 338 started the first incubation phase of the Vector API to take advantage of super-fast vector instructions like Intel's AVX](https://openjdk.java.net/jeps/338).
* [JEP 376 brought concurrent thread-stack processing to ZGC](https://openjdk.java.net/jeps/376).
* [JEP 380 added Unix-domain socket support to channels](https://openjdk.java.net/jeps/380).
* [JEP 386 landed support for using OpenJDK on Alpine Linux with musl libc instead of glibc](https://openjdk.java.net/jeps/386).
* [JEP 387 introduced the Elastic Metaspace, which should help to return memory faster to the operating system](https://openjdk.java.net/jeps/387).
* [JEP 388 introduced support for Windows on ARMv8](https://openjdk.java.net/jeps/388).
* [JEP 389 started the first incubation phase of the Foreign Linker API, making it simpler and safer to interact with native code](https://openjdk.java.net/jeps/389).
* [JEP 390 brought warnings for value-based classes](https://openjdk.java.net/jeps/390).
* [With JEP 392, jpackage, a tool to create native application packages like an .exe, was promoted to a production feature](https://openjdk.java.net/jeps/392).
* [JEP 393 started a third incubation phase of the Foreign-Memory Access API that replaces Unsafe, and more](https://openjdk.java.net/jeps/393).
* [JEP 394 adds pattern matching for instanceof](https://openjdk.java.net/jeps/394).
* [With JEP 395, Records are now production-ready](https://openjdk.java.net/jeps/395).
* [JEP 396 encapsulates additional JDK internals by default](https://openjdk.java.net/jeps/396).
* [JEP 397 started the second preview of sealed classes](https://openjdk.java.net/jeps/397).

For a complete list of the enhancements (including ones that only impact developers of OpenJDK), [see the JDK 16 overview over at OpenJDK](http://openjdk.java.net/projects/jdk/16/).

### AdoptOpenJDK for Alpine Linux With musl libc 

[Alpine Linux](https://alpinelinux.org/) is a popular Linux distribution for container workloads because of its small footprint. Contrary to most other Linux distributions, Alpine Linux is not based on the [C library created by the GNU project](https://www.gnu.org/software/libc/) (usually referred to as "glibc") but uses [musl libc](http://musl.libc.org) instead. So far, OpenJDK has not supported musl libc but only glibc. Therefore, we had to add the GNU C library to our container images based on Alpine Linux, which increased the container images' size. With AdoptOpenJDK 16, this is no longer necessary. We now have separate variants of AdoptOpenJDK 16 that are purpose-built for musl libc that can be downloaded as a tarball and are also available as ready-made container images.  

### Preview of AdoptOpenJDK for Windows on ARM<a name="adoptopenjdk-for-windows-on-arm"></a>

Our friends from Microsoft, led by our very own [Martijn Verburg](https://twitter.com/karianna), have ported [OpenJDK to Windows on ARM](https://openjdk.java.net/jeps/388) so that you can run Java (and Java-based applications) natively on your [Surface Pro X](https://www.microsoft.com/en-us/p/surface-pro-x/8qg3bmrhnwhk) or the Lenovo IdeaPad 5G. Therefore, AdoptOpenJDK 16 is now available for Windows on ARM, too, but only as a preview. The reason is that Windows on ARM is a relatively new thing with minimal hardware and software availability. Therefore, we have not yet been able to test it on a regular schedule like we usually do.

### Removal of 10 Symantec Root Certificates

As part of the general distrust of Symantec root certificates, 10 of them have been removed from AdoptOpenJDK. For details, see [the related issue over at the Mozilla Foundation](https://bugzilla.mozilla.org/show_bug.cgi?id=1670769).

### Removal of XL Variants of OpenJ9

So far, AdoptOpenJDK with Eclipse OpenJ9 came in two flavors: "normal" and "XL". The XL variant was purpose-built for workloads with very large heaps (hence the name). Thanks to recent improvements to OpenJ9, this distinction is no longer necessary. [AdoptOpenJDK 16 with Eclipse OpenJ9 is available as a single build that automatically switches between the normal and XL mode](https://eclipse.github.io/openj9-docs/version0.25/#single-build-for-compressed-references-and-non-compressed-references) depending on the configured heap size (`-Xmx` switch). If the heap size is larger than 57 GB, it will automatically enable non-compressed references, which corresponds to the old XL mode. On AIX and Linux with the metronome garbage collection policy (`-Xgcpolicy:metronome`), the threshold is at 25 GB instead of 57 GB. Next month, AdoptOpenJDK 8 and 11 with OpenJ9 will get the same capabilities. 

Some users might have chosen to use the XL variants even if their heap was not that large. They can get back that behavior by starting the VM with `-Xnocompressedrefs`. If you want to know more, see [what the Eclipse OpenJ9 documentation has to say about compressed references](https://eclipse.github.io/openj9-docs/allocation/#compressed-references).
