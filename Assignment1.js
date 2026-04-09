
// Assignment Details:
// Find the number of occurrences.
// Given the array, const nums = [2,4,5,2,1,2];
// if const k = 2, then output >> 3

// Assignment Requirements:
// 1. Initialize count to 0.
// 2. Loop through the array `nums`.
// 3. If the element equals `k`, increment count.
// 4. Return the count of `k` in `nums`.

// Hints to Solve:
// Loop through the array and compare the k with the array index value and if matches, increase the count

const nums= [2,4,5,2,1,2];
let k=2;
let count=0;
for (i=0;i<=nums.length;i++){
 if(k===nums[i]){
    count++;
 }
}
console.log("count of K = " + count);