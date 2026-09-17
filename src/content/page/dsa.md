---
title: Data Structures and Algorithms
description: Data structures and algorithms.
createdAt: 2026-08-27
updatedAt: 2026-09-16
toc: true
---

# Data Structures and Algorithms

This page contains notes on some data structures and algorithms, with some example problems.

See [this page](/cs/leetcode) for more LeetCode problems.

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

There's a small caveat: in some cases, there's no guarantee that a valid answer exists in the array, so the `left` value after the loop may need extra validation.

To sum up, there are only three things (highlighted) to consider when using this template:

- **The initial `left` and `right` values**: only elements in `[left, right)` get checked
- **The return value**: `left` or `left - 1`, and whether the result needs a validity check
- **The `check` function**: often the hardest part

### Examples

#### [LeetCode: 704. Binary Search](https://leetcode.com/problems/binary-search/description/)

```python {12}
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def check(index):
            return nums[index] >= target

        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            if check(mid):
                right = mid
            else:
                left = mid + 1
        return left if nums[left] == target else -1
```

Notice that we have to check here in case `target` isn't present in `nums`.

#### [LeetCode: 162. Find Peak Element](https://leetcode.com/problems/find-peak-element/description/)

This one is a bit tricky.

Let's consider the case where there's only one peak. It's easy to solve by binary search:

```python
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        def check(index):
            if index == len(nums) - 1:
                return True
            return nums[index] > nums[index + 1]

        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            if check(mid):
                right = mid
            else:
                left = mid + 1
        return left
```

Surprisingly, the exact same algorithm also works for our problem where there can be multiple peaks.

We can assume every array has a peak: if there were no peaks, the second element has to be larger than the first, otherwise the first is the peak; the third has to be larger than the second for the same reason; thus, all elements have to be increasing (because of the constraint `nums[i] != nums[i + 1]` for all valid `i`); however, the last element will then be a peak. Thus, there always exists a peak in a given array. (Also, the problem description doesn't say anything about returning `-1`.)

The reason this works even with multiple peaks is that `check` might map the array to something like `[False, False, True, True, False, True, False, True]`, and what matters is that each result tells us which half must contain a peak: if `check(mid)` is `True`, then `nums[mid] > nums[mid + 1]`, so a peak exists somewhere in `[left, mid]`; otherwise, `nums[mid] < nums[mid + 1]`, so a peak exists in `[mid + 1, right]`. Thus, we can always discard one half while preserving the guarantee that a peak remains.

#### [LeetCode: 153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        def check(index):
            return nums[index] <= nums[-1]

        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            if check(mid):
                right = mid
            else:
                left = mid + 1
        return nums[left]
```

After a rotation, the target (the minimum) splits the array into two halves: the first half strictly larger than the last element, and the second half, starting with the target, smaller than or equal to the last element (equality holds when the target is the last element).

#### [LeetCode: 33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def check(index):
            if target > nums[-1]:
                return nums[index] >= target or nums[index] <= nums[-1]
            else:
                return nums[index] >= target and nums[index] <= nums[-1]

        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            if check(mid):
                right = mid
            else:
                left = mid + 1
        return left if nums[left] == target else -1
```

The `check` function for this problem basically uses the last element as a reference point to determine which sorted half `target` belongs to.

## Dynamic Programming

Key attributes:

- optimal substructure: the solution to a given optimization problem can be obtained by combining the optimal solutions to its sub-problems
- overlapping sub-problems: the space of sub-problems must be small, that is, any recursive algorithm solving the problem should solve the same sub-problems over and over, rather than generating new sub-problems

Approaches:

- top-down: recursion + caching
  - usually more intuitive
  - only computes sub-problems that are actually needed
- bottom-up: iteration + DP table
  - no call stack overhead
  - potential space optimization

### Examples

#### [LeetCode: 70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)

A classic DP problem. You can climb to stair `n` by either taking 1 step from stair `n-1` or taking 2 steps from stair `n-2`. This means the number of ways to climb to stair `n` equals the number of ways to climb to stair `n-1` plus the number of ways to climb to stair `n-2`. Notice how we are breaking the problem into two sub-problems, and how the solution to the problem can be obtained by combining the solutions to the sub-problems. Also, notice that the sub-problems are overlapping: to get the solution for `n-1`, we are going to need the solution for `n-2`, which we already computed for `n`.

The most intuitive way to implement the algorithm above is through recursion.

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        return self.climbStairs(n - 1) + self.climbStairs(n - 2)
```

The implementation above is correct, but not efficient enough. This is because we are doing a ton of redundant computation: we are not reusing the computation results for the overlapping sub-problems. In fact, this implementation has $O(2^n)$ time complexity.
The trivial optimization now is to use memoization (storing the results of expensive function calls in a cache to return them instantly when the same inputs occur again).

```python {3, 5}
class Solution:
    def climbStairs(self, n: int) -> int:
        from functools import cache

        @cache
        def helper(n):
            if n == 1:
                return 1
            if n == 2:
                return 2
            return helper(n - 1) + helper(n - 2)

        return helper(n)
```

In older versions of Python, import `lru_cache` and use `@lru_cache()` instead. The following implementation essentially does the same thing, without the `cache` decorator.

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {1: 1, 2: 2}

        def helper(n):
            if n not in memo:
                memo[n] = helper(n - 1) + helper(n - 2)
            return memo[n]

        return helper(n)
```

The memoization optimization collapses the recursion tree from basically a full binary tree into a degenerate tree (a skewed tree), giving $O(n)$ time complexity.

The above approach is top-down. Now, we show a bottom-up approach with the same time complexity, where we build the answer from the base cases all the way up to `n`, iteratively.

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        dp = [0] * (n + 1)
        dp[1], dp[2] = 1, 2
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
```

Notice that to compute `dp[i]`, we only need `dp[i-1]` and `dp[i-2]`, which gives us the following space optimization.

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        a, b = 1, 2
        for _ in range(3, n + 1):
            a, b = b, a + b
        return b
```

By replacing the `dp` array with two variables `a` and `b` that get updated every time we compute the next step, we have an $O(1)$ space complexity implementation.

#### [LeetCode: 198. House Robber](https://leetcode.com/problems/house-robber/description/)

To find the maximum money we can get from the first `i` houses, we only need two values: the best we can do robbing house `i`, and the best we can do not robbing it, then take the larger of the two.

If we rob house `i`, we can't rob house `i-1`, so the best is `nums[i]` plus the best for the first `i-1` houses without robbing house `i-1`. If we don't rob house `i`, there's no such restriction, so the best is the larger of the two options for the first `i-1` houses (robbing or not robbing house `i-1`).

Either way, the two values for the first `i` houses depend only on the two values for the first `i-1` houses, so we can compute them bottom-up while keeping just two numbers in memory. The space-optimized implementation below tracks them as `rob` and `norob`.

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        rob, norob = 0, 0
        for num in nums:
            rob, norob = num + norob, max(norob, rob)
        return max(rob, norob)
```

## Linked List

Definition for a singly-linked list on LeetCode:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

---

A linked list can be reversed in place by reversing each `next` pointer while iterating over it.

[LeetCode: 206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)

```python {5-6}
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pre, cur = None, head
        while cur is not None:
            nxt = cur.next
            cur.next = pre
            pre = cur
            cur = nxt
        return pre
```

In each iteration, we point the current node's `next` pointer to the previous node, and then update `pre` and `cur` to get ready for the next iteration. Note that we have to store the current node's next node in a temporary variable before we update the pointer, because after we point the current node's `next` pointer to the previous node, we lose track of the next node. Initially we set the current node to be the `head`, so its previous node is set to `None` — the tail of the reversed list is the original `head`, whose `next` is `None`. After the loop, `cur` is `None`, and `pre` is the last node we updated, so `pre` is the head of the reversed list.

This implementation gives the optimal time and space complexities of $O(n)$ and $O(1)$.

In my opinion, a more intuitive and elegant implementation is through recursion.

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        reversed_head = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return reversed_head
```

To reverse a linked list, we remove its head, reverse the rest, and append the head to the reversed rest as its new tail. To append the head as the tail, notice that the head's `next` points to the tail of the reversed list, so we just set the tail's `next` to `head` and make `head` point to `None` to make it the new tail.

This implementation runs in $O(n)$ time, but has $O(n)$ space complexity because of the recursive call stack.

We can actually write the recursion in a different way:

```python {3, 8}
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def helper(acc, node):
            if node is None:
                return acc
            nxt = node.next
            node.next = acc
            return helper(node, nxt)

        return helper(None, head)
```

This is a common trick in functional programming that transforms a regular recursion into a _tail recursion_ by introducing an accumulator.

A _tail recursion_ is a special kind of recursion where the recursive call is the function's last operation along that execution path.
The general idea of converting to a tail recursion is to do the work "on the way down" instead of "on the way back up", by carrying state with an accumulator argument. Note that it's not always convertible.
In this case it is. Each recursive call builds up the answer by appending the current node to `acc` as the head, so a reversed linked list is built on `acc` when reaching the end.

The reason to convert to tail recursion is that it becomes possible to apply compiler optimizations that basically reuse the current stack frame for the recursive call instead of allocating a new one for each recursive call. We know for sure that once we start the recursive function call, the current function frame is useless, as we are not doing any more work after the recursive call returns.

Therefore, we can argue the above implementation has $O(1)$ space complexity under TCO (tail call optimization). The caveat, however, is that CPython doesn't support TCO, so in Python, this is still technically $O(n)$ space.
In some other programming languages like OCaml, the equivalent code is tail-call optimized.

```ocaml
let rev list =
  let rec aux acc = function
    | [] -> acc
    | h :: t -> aux (h :: acc) t
  in
  aux [] list
```

Now, looking back at the iterative implementation, we can see it's essentially doing the same thing as our tail-recursive implementation, just expressed in a different way.

---

Sometimes a _dummy node_ makes life easier. It's a placeholder node placed before the head, so an operation that may modify the head (e.g. deletion, insertion, merging) needs no special care: every node, including the head, is reached through some node's `next` pointer, and the head of the resulting list is simply `dummy.next`.

### Examples

#### [LeetCode: 21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

```python {3, 14}
class Solution:
    def mergeTwoLists(
        self, list1: Optional[ListNode], list2: Optional[ListNode]
    ) -> Optional[ListNode]:
        dummy = ListNode()
        cur = dummy
        while list1 and list2:
            if list1.val < list2.val:
                cur.next = list1
                list1 = list1.next
            else:
                cur.next = list2
                list2 = list2.next
            cur = cur.next
        cur.next = list1 if list1 else list2
        return dummy.next
```

Without a dummy node, we would have to pick which of the two heads starts the merged list before doing anything.
