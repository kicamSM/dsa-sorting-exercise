function merge(arr1, arr2) {
    // *remember that these are both sorted arrays 
    let i = 0; 
    let j = 0; 
    let newArr = []; 
  
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i]); 
            i++; 
        } else { 
            newArr.push(arr2[j]); 
            j++; 
        }
    }
    
    while(i < arr1.length) {
        newArr.push(arr1[i]); 
        i++; 
    }

    while(j < arr2.length) {
        newArr.push(arr2[j]); 
        j++; 
    }

    return newArr
}

function mergeSort(arr) {
    // * taking two arrays that are not sorted and then sorting them recursively. Do this by breaking up into arrays of 1 or 0;

    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let right = mergeSort(arr.slice(mid));
    let left = mergeSort(arr.slice(0, mid));

    return merge(left, right);

}



// let arr1 = [1,3,4,5];
// let arr2 = [2,4,6,8];
// let m1 = merge(arr1,arr2) // [1,2,3,4,4,5,6,8]
// console.log("m1:", m1)

// arr1 // [1,3,4,5];
// arr2 // [2,4,6,8];

// let arr3 = [-2,-1,0,4,5,6];
// let arr4 = [-3,-2,-1,2,3,5,7,8];

// let m2 = merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
// console.log("m2:", m2)

// let arr5 = [3,4,5]
// let arr6 = [1,2]

// let m3 = merge(arr5,arr6) // [1,2,3,4,5]
// console.log("m3:", m3)


let ms1 = mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
console.log("ms1:", ms1)
// let ms2 = mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// console.log("ms2:", ms2)
// let ms3 = mergeSort([1, 2, 3]); // [1, 2, 3]
// console.log("ms3:", ms3)
// let ms4 = mergeSort([]);
// console.log("ms4:", ms4)

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

let ms5 = mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
                 //  43, 67, 75, 232, 232, 453, 546, 4342]
console.log("ms5:", ms5)

module.exports = { merge, mergeSort};