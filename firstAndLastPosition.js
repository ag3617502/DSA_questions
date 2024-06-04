// Question
// Given a sorted array of integers, find the starting and ending position of a given target value.If the target is not found, return [-1, -1].

function firstAndLast(arr, target) {
    let answer=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target && answer.length === 0) {
            answer.push(i)
        }
        if (arr[i] === target && answer.length ) {
            answer[1] = i
        } if (arr[i] > target) {
            i = arr.lrngth + 1
        }
    }
        return answer.length? answer: [-1, -1]
}
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(firstAndLast(nums, target))