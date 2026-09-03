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

We can assume every array has a peak: if there were no peaks, the second element has to be larger than the first, otherwise the first is the peak; the third has to be larger than the second for the same reason; thus, all elements have to be increasing (because of the constraint `nums[i] != nums[i + 1]` for all valid `i`); however, the last element will then be a peak. Thus, there always exists a peak in an given array. (Also, the problem description doesn't say anything about returning `-1`.)

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

```python {3-4}
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
