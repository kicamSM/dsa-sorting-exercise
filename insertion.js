// function insertionSort(arr) {
//     console.log("original array:", arr)
    // let idx1 = 0; 
    // let idx2 = 1;
    
    // while(idx1 < arr.length && idx2 < arr.length) {
    //     console.log("while loop is running")
    //     if(arr[idx1] > arr[idx2]) {
    //         let swap = arr[idx1]; 
    //         arr[idx1] = arr[idx2]; 
    //         arr[idx2] = swap; 
    //         console.log("arr:", arr)
    //         idx2++;
    //     } else {
    //         idx1++; 
    //     }
    // }

function insertionSort(arr) {
    console.log("original array:", arr)
    for(let i = 0; i < arr.length; i++) {
        console.log("first for loop is running")
        
        let el1 = arr[i];

        // * j is starting at -1, 
        // * then if j greater than -1 and value of j is greater than el1 
        // * then make swap places. 

        // ! note that j must be var and not let because var allows j value to persist in the for loop. This is definitely the confusing bit. 

        for(var j = i - 1; j > -1 && arr[j] > el1; j--){
            console.log("second for loop is running")
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = el1;

    }
   return arr;
}

// function insertionSort(arr) {
//     console.log("insertionSort is running ")
//     for (let i = 0; i < arr.length; i++) {
//       let currentValue = arr[i];
  
//       for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
//         arr[j + 1] = arr[j];
//       }
  
//       arr[j + 1] = currentValue;
//     }
  
//     return arr;
//   }




// let iS1 = insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
let iS2 = insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// let iS3 = insertionSort([1, 2, 3]); // [1, 2, 3]
// let iS4 = insertionSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

// let iS5 = insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34,
//                      //  34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]


// console.log("iS1:", iS1);
console.log("iS2:", iS2);
// console.log("iS3:", iS3);
// console.log("iS4:", iS4);
// console.log("iS5:", iS5);


module.exports = insertionSort;