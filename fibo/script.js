'use strict';


function fiboArray(nums_arr, n) {
    const initialLength = nums_arr.length;
  
    for (let i = initialLength; i < initialLength + n; i++) {
      const lastThreeSum = nums_arr.slice(i - 3, i).reduce((sum, num) => sum + num, 0);
      nums_arr.push(lastThreeSum);
    }
  
    return nums_arr;
  }
  
  const nums_arr = [1, 2, 3];
  const n = 9;
  const result = fiboArray(nums_arr, n);
  console.log(result);
  