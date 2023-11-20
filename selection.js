function selectionSort(arr) {
    console.log("original array:", arr)

    for(let i = 0; i < arr.length; i++) {

        let minIdx = i;

        for(let j = 0; j < arr.length; j++) {

            if(arr[minIdx] < arr[j]){
                let swap = arr[j];
                arr[j] = arr[minIdx];
                arr[minIdx] = swap; 
                console.log("arr in if:", arr)
            } 
        }
    }

    return arr

}


// let sS1 = selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
let sS2 = selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// let sS3 = selectionSort([1, 2, 3]); // [1, 2, 3]
// let sS4 = selectionSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];

// let sS5 = selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34,
//                      //  35, 43, 67, 75, 232, 232, 453, 546, 4342]

// console.log("sS1:", sS1);
console.log("sS2:", sS2);
// console.log("sS3:", sS3);
// console.log("sS4:", sS4);
// console.log("sS5:", sS5);

module.exports = selectionSort;


