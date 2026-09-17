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

#### [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/)

```python
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if fast == slow:
                return True
        return False
```

Have two pointers start at the head, with one moving 1 step at a time and the other 2 steps at a time. If there's no cycle, the fast pointer will hit the end. If there's a cycle, the fast pointer will lap the slow one: inside the cycle the gap shrinks by exactly 1 per iteration, so the pointers will meet rather than jumping over.
