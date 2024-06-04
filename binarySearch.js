// Question:
// Implement binary search to find the index of a target element in a sorted array.If the target is not found, return -1.

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1;
    var answer
    for (let i = left; i < right; i++) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            answer = mid
            i = arr.length;
        }
        if (arr[mid] > target) {
            right = mid - 1
        }
        if (arr[mid] < target) {
            left = mid + 1
        }
    }
    return answer
};
var array1 = [1, 2, 3, 4, 5, 6, 7];

console.log(binarySearch(array1, 7))

function binarySearchWhileLoop(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
console.log(binarySearchWhileLoop(arr, target)); 
