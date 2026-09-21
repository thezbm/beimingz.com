---
title: LeetCode
description: LeetCode problems with notes.
createdAt: 2026-09-16
updatedAt: 2026-09-16
---

# LeetCode

This page is a collection of LeetCode problems I did.

For more detailed explanations on data structures and algorithms, see [this page](/cs/dsa).

#### [338. Counting Bits](https://leetcode.com/problems/counting-bits/description/)

```python
class Solution:
    def countBits(self, n: int) -> List[int]:
        dp = [0] * (n + 1)
        for i in range(n + 1):
            dp[i] = dp[i >> 1] + (i & 1)
        return dp
```

The number of `1`'s in `i` is just the number of `1`'s in `i >> 1`, plus 1 if its last bit is `1`.
