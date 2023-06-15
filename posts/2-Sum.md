---
title: "LEETCODE 1: 2-SUM"
subtitle: "My solution to leetcode problem 1"
date: "2021-08-27"
---

## Two Sum Problem Explanation

The given code solves the classic Two Sum problem, which involves finding two numbers in an array that add up to a given target value. This markdown document explains the code and its approach to solving the problem.
### Problem Description

Given an array of integers `nums` and an integer `target`, we need to find and return the indices of two numbers in `nums` that add up to the `target` value. The following assumptions and conditions apply:a
- Each input will have exactly one solution, meaning there will always be a pair of numbers that sums up to the target.
- We cannot use the same element twice in the pair.
- The order of the returned indices does not matter.
### Code Explanation

The code is implemented as a class called `Solution`. Inside the class, there is a method named `twoSum` that takes in the `nums` array and the `target` value as input and returns the indices of the two numbers that add up to the target.

```python

class Solution:

    # Time complexity: O(n), where n is the length of the input list "nums"
    def twoSum(self, nums, target):
        complements = {}  # dictionary to store the complements
        
        # iterate over the input list
        for i in range(len(nums)):
            complement = target - nums[i]  # calculate the complement for the ith element of the list
            
            # if the ith element is already in the complements dictionary return i and the index of the complement
            if nums[i] in complements:
                return [complements[nums[i]], i]

            # add the complement and its index to the dictionary
            complements[complement] = i
```



Let's go through the code step by step: 
1. Initialize an empty dictionary called `complements`. This dictionary will be used to store the complements of the numbers encountered in the `nums` array. 
2. Iterate over the `nums` array using the `range(len(nums))` loop. The loop variable `i` represents the index of the current element. 
3. Calculate the complement of the current element by subtracting it from the `target` value: `complement = target - nums[i]`. 
4. Check if the current element is already present in the `complements` dictionary. If it is, it means we have already encountered its complement, and we can return the indices of both numbers. In this case, we return `[complements[nums[i]], i]`. 
5. If the current element is not in the `complements` dictionary, it means we haven't encountered its complement yet. So, we add the complement and its index to the dictionary using `complements[complement] = i`. 
6. If no solution is found after iterating through the entire `nums` array, it means there is no valid pair of numbers that add up to the `target` value. In this case, the function will implicitly return `None`.
### Time Complexity Analysis

The time complexity of the code is O(n), where n is the length of the input list `nums`. This is because we iterate through the `nums` array once, performing constant-time operations for each element. The dictionary lookups have an average time complexity of O(1) due to the use of hashing.
### Conclusion

The provided code efficiently solves the Two Sum problem by using a dictionary to store complements of the numbers encountered. It takes advantage of constant-time dictionary lookups to find the complement of each element and check for previously encountered complements. This approach achieves a time complexity of O(n), making it an optimal solution for this problem.