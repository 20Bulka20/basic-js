// Transform array
// Your task is to implement the function transform(arr) that takes an array and returns it transformed, 
//based on the control sequences that it contains. Control sequences are defined string elements of the mentioned array:
// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next doubles the next element of the array in the transformed array.
// --double-prev doubles the previous element of the array in the transformed array.
// For example:
// transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]

// transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]

// Control sequences do not fall into the transformed array. Control sequences in initial array do not occur in a row. 
//If there is no element next to the control sequence to which it can be applied, it does nothing. 
//The function should throw an Error if the arr is not an Array.

module.exports = function transform(/*arr*/) {


    throw 'Not implemented';
    // remove line with error and write your code here

    // if (Array.isArray(arr) && (typeof arr) !== 'undefined') {


    //     for (let i = 0; i < arr.length; i++) {
    //         if(typeof arr[i]!=='undefined'){
    //         if (arr[i] === '--double-next') {
    //             arr[i] = arr[i + 1];
    //         }
    //         else if (arr[i] === '--double-prev') {
    //             arr[i] = arr[i - 1];
    //         }
    //         else if (arr[i] === '--discard-next') {
    //             for (let k = i; k < arr.length; k++) {
    //                 arr[k] = arr[k + 1];
    //             }
    //             arr.pop();
    //         }
    //         else if (arr[i] === '--discard-prev') {
    //             for (let k = i; k < arr.length; k++) {
    //                 arr[k] = arr[k - 1];
    //             }
    //             arr.pop();
    //         }}
    //     }
    //     return arr;

    //     // let a = arr.some(elem => elem === '--discard-prev' || elem === '--double-prev');    
    //     // if (a) {
    //     //     let rarr = arr.reverse();
    //     //     for (let i = 0; i < rarr.length; i++) {
    //     //         if (rarr[i] === '--double-prev') {
    //     //             rarr[i] = rarr[i + 1];
    //     //             return (rarr.reverse());
    //     //         }
    //     //         if (rarr[i] === '--discard-prev') {
    //     //             for (let k = i; k < rarr.length; k++) {
    //     //                 rarr[k] = rarr[k + 1];
    //     //             }
    //     //             rarr.pop();
    //     //         }
    //     //     }
    //     //     return rarr.reverse();
    //     // }
    //     // else {
    //     //     for (let i = 0; i < arr.length; i++) {
    //     //         if (arr[i] === '--double-next') {
    //     //             arr[i] = arr[i + 1];
    //     //             return (arr);
    //     //         }
    //     //         if (arr[i] === '--discard-next') {
    //     //             for (let k = i; k < arr.length; k++) {
    //     //                 arr[k] = arr[k + 1];
    //     //             }
    //     //             arr.pop();
    //     //         }
    //     //     }
    //     //     return arr;
    //     // }
    // }
    // else throw new UserException("the arr is invalid");
};
