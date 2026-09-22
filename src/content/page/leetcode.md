---
title: LeetCode
description: LeetCode problems with notes.
createdAt: 2026-09-16
updatedAt: 2026-09-20
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

#### [143. Reorder List](https://leetcode.com/problems/reorder-list/description/)

```python
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow, fast = head, head.next
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
        # now slow is the last node in the first half;
        # cut the linked list by pointing slow's next to None
        fst = head
        snd, slow.next = slow.next, None

        prev, curr = None, snd
        while curr:
            curr.next, prev, curr = prev, curr, curr.next
        snd = prev

        while snd:
            fst.next, snd.next, fst, snd = snd, fst.next, fst.next, snd.next
```

Find the middle node to cut the linked list into two halves, reverse the second half, and merge the two halves.

#### [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

```python
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(next=head)
        left, right = dummy, dummy
        for _ in range(n):
            right = right.next
        while right.next:
            left, right = left.next, right.next
        left.next = left.next.next
        return dummy.next
```

Keep a gap of `n` between the two pointers, advance both until `right` hits the end, and the node after `left` is the one to delete. The dummy head makes deleting the head itself a normal case.

#### [57. Insert Interval](https://leetcode.com/problems/insert-interval/description/)

```python
class Solution:
    def insert(
        self, intervals: List[List[int]], newInterval: List[int]
    ) -> List[List[int]]:
        ans = []
        toInsert = newInterval
        inserted = False
        for interval in intervals:
            if interval[1] < toInsert[0]:
                ans.append(interval)
            elif interval[0] > toInsert[1]:
                if not inserted:
                    ans.append(toInsert)
                    inserted = True
                ans.append(interval)
            # overlap, update the interval to insert
            else:
                toInsert[0] = min(toInsert[0], interval[0])
                toInsert[1] = max(toInsert[1], interval[1])

        if not inserted:
            ans.append(toInsert)

        return ans
```

When passing through `intervals`, there are three phases: adding intervals before `toInsert` (initially `newInterval`), merging overlapping intervals to update `toInsert`, and finally adding `toInsert` and all intervals after it.

#### [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)

```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        ans = []
        toInsert = intervals[0]
        for interval in intervals:
            if toInsert[1] < interval[0]:
                # no overlap, can't merge anymore, add to result list
                ans.append(toInsert)
                toInsert = interval
            else:
                # overlap, merge
                toInsert[1] = max(toInsert[1], interval[1])
        ans.append(toInsert)
        return ans
```

Sort `intervals` so the start values are non-decreasing, then iterate over it: merge intervals until we can't, add the merged interval to the result list, and repeat.
