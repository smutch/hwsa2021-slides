---
marp: true
title: HWSA 2021 - Structuring and optimising Python code
description: Slides for the practical session of the 2021 HWSA
theme: custom
paginate: true
_paginate: false  <!--_-->
_footer: https://github.com/smutch/code_prac_hwsa2021  <!--_-->
---

<!-- align: center -->
<!-- background: linear-gradient(to right, #f05053, #e1eec3) -->

# <!--fit--> Optimizing and structuring python code
## HWSA 2021

Simon Mutch

---

# Session outline

![bg](black)
![bg blur:4px brightness:0.2 contrast:80%](./assets/chris-ried-ieic5Tq8YMk-unsplash.jpg)
![](white)

- Short presentation
    - Optimisation
    - Structuring your code
    - Documentation
- Practical
    - Open ended session with a short code to try some of these techniques out on.

---

# Common misconceptions

Numpy `vectorize` does not "vectorize" your code!

From the docs:


The vectorize function is provided primarily for convenience, not for performance. The implementation is essentially a for loop.
_Numpy docs_
{.quote}
