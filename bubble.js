function bubbleSort(arr) {
    
    for(let i = 0; i < arr.length; i++){
        let swap = false;

        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[i] < arr[j]){
                let swapVal = arr[j];
                arr[j] = arr[i];
                arr[i] =  swapVal;
                swap = true; 
            }
        }
    if(swap === false) return arr;
  
    }
    return arr
}



let bs1 = bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// let bs2 = bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
let bs3 = bubbleSort([1, 2, 3]); // [1, 2, 3]
// let bs4 = bubbleSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
    23, 2, 453, 546, 75, 67, 4342, 32
];

// let bs5 = bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67,
                  // 75, 232, 232, 453, 546, 4342]

console.log("bs1:", bs1)
// console.log("bs2:", bs2)
console.log("bs3:", bs3)
// console.log("bs4:", bs4)
// console.log("bs5:", bs5)

module.exports = bubbleSort;