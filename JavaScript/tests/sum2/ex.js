/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
function findSum(array, target){
    for(let i = 0; i < array.length; i++){
        let num = array[i]
        for(let c = 1; c < array.length; c++){
            if(num + array[c] == target){
                console.log(`It worked! the number ${num} plus ${array[c]} is equal to target! (${num} + ${array[c]} = ${target})`)
                
            }
            break;
        }
    }
}
let array = [10, 54, 12, 14, 11, 8, 5, 4, 2, 1, 67]
findSum(array, 68)

// my first leetcode exercise!
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        for(let c = (i+1); c < nums.length; c++){
            if(num + nums[c] == target){
                return [i, c]
            }
        }
    }
};