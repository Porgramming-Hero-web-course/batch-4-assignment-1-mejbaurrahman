"use strict";
{
    const removeDuplicates = (arr) => {
        let arr2 = [];
        arr2.push(arr[0]);
        for (let i = 1; i < arr.length; i++) {
            if (arr2.indexOf(arr[i]) == -1) {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    };
    // const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    // console.log(result);
}