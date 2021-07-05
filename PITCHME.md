---
marp: true
title: HWSA 2021 - Structuring and optimising Python code
description: Slides for the practical session of the 2021 HWSA
theme: custom
paginate: true
_paginate: false  <!--_-->
footer: https://github.com/smutch/code_prac_hwsa2021
---

<!-- align: center -->
<!-- background: linear-gradient(to right, #f05053, #e1eec3) -->

# <!--fit--> Optimizing and structuring python code
## HWSA 2021

Simon Mutch

<style scoped> section>* {flex-grow: 0; flex-shrink: 0} </style>

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

# Things to know about Python and optimisation

## (Almost) Everything is an object

This means there is a cost with looking up and accessing values.

```python
a = 8.0 
print(a)
```

Translated to C this is actually something more like (but in reality even more complicated!):

```c
void *a = (void*)malloc(sizeof(double));
*(int*)a = 8.0;
printf("{:g}\n", *((int*)a));
```

---

# General optimisation rules (for Python)

For loops should be avoided if possible for large N. Take advantage of Numpy's ufuncs (which will vectorize this and do it more efficiently).

```python
arr = np.arange(10)

# BAD
for ii, val in enumerate(arr):
    arr[ii] = np.sqrt(val)

# GOOD
arr = np.sqrt(arr)
```

---

# Common misconceptions

Numpy `vectorize` does not "vectorize" your code!

From the docs:

The vectorize function is provided primarily for convenience, not for performance. The implementation is essentially a for loop.
_Numpy docs_
{.quote}
