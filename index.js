function twoSum(arr, target) {
    const numIndices = {};
  
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      const complement = target - currentNum;
  
      if (complement in numIndices) {
        return [numIndices[complement], i];
      }
  
      numIndices[currentNum] = i;
    }
  
  }
  
  const arr = [2, 7, 11, 15];
  const target = 9;
  console.log(twoSum(arr, target)); // Output: [0, 1]
  