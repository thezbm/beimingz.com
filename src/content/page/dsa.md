---
title: Data Structures and Algorithms
description: Data structures and algorithms.
---

# Data Structures and Algorithms

## Binary Search

I came across a really elegant binary search template in this awesome [post](https://leetcode.com/discuss/post/786126/python-powerful-ultimate-binary-search-t-rwv8/):

```python {2-3, 5, 12}
def binary_search(array) -> int:
    def check(index) -> bool:
        pass

    left, right = 0, len(array) - 1
    while left < right:
        mid = left + (right - left) // 2
        if check(mid):
            right = mid
        else:
            left = mid + 1
    return left
```

In essence, this template treats a binary search problem as mapping the array to `[False, False, ..., False, True, True, ..., True]` with a function `check`, then finding the first element that maps to `True` (or, in some cases, the last element that maps to `False`).

`left = mid + 1` guarantees the search range keeps shrinking every iteration, even in the `right - left == 1` case, where `mid` equals `left`, which prevents an infinite loop. When `check(mid)` is `True`, `right` is pulled down to `mid`; when it's `False`, `left` is pushed up to `mid + 1`. So when the loop exits (`left == right`), `left` has just moved past the last `False` element and now sits on the first `True` element.

There's a small caveat: if `right` is never updated in the loop, `left` will end up holding its initial value, which may or may not be a valid answer. If the problem guarantees a valid answer exists, there's no issue. If it doesn't, you can either check the returned `left` value for validity, or set the initial `right` to one past the right boundary and think of `[left, right)` as the search space; the initial `right` then acts as a sentinel: if `left` ends up on it, no valid answer exists.

To sum up, there are only three things (highlighted) to consider when using this template:

- **The initial `left` and `right` values**: only elements in `[left, right)` get checked
- **The return value**: `left` or `left - 1`, and whether the result needs a validity check
- **The `check` function**: often the hardest part
