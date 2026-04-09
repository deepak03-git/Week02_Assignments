
// Assignment Details:
// Create a JavaScript program that defines a function to compute the intersection of two arrays. The
// intersection should include elements that appear in both arrays without any duplicates.

// Assignment Requirements:
// 1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are
// arrays of numbers, and returns an array of their intersection.
// 2. Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and
// `arr2`, it should appear only once in the result.
// 3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is
// present in `arr2` and not already included in the result array.
// 4. Include example calls to the `intersection` function with different arrays to demonstrate the
// function’s functionality. Include examples with no common elements, all elements common, and
// typical cases.


function intersection (arr1,arr2){
let result=[];
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j] && !result.includes(arr1[i])){
            result.push(arr1[i]);
        }
    }
}
//console.log(result);
return result;
}

let arr1= [1,2,3,1,4,5];
let arr2= [1,6,3,0,1,5];
let finalresultsTypical = intersection(arr1,arr2);
console.log('finalresultsTypical=='+finalresultsTypical);

let arr3= [1,2,3,4,5];
let arr4= [1,2,3,4,5];
let finalresultsCommon= intersection(arr3,arr4);
console.log('finalresultsCommon=='+finalresultsCommon);

let arr5= [1,2,3,4,5];
let arr6= [6,7,8,9,10];
let finalresultsNoCommon = intersection(arr5,arr6);
console.log('finalresultsNoCommon==' + finalresultsNoCommon);

