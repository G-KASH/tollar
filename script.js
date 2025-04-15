function sumOfDistinctElements(set1, set2) {
    let sum = 0;
  
    for (let i = 0; i < set1.length; i++) {
      if (!set2.includes(set1[i])) {
        sum += set1[i];
      }
    }
  
    for (let i = 0; i < set2.length; i++) {
      if (!set1.includes(set2[i])) {
        sum += set2[i];
      }
    }
  
    return sum;
  }
  
  // Example
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  console.log("Sum of distinct elements:", sumOfDistinctElements(set1, set2)); // Output: 13
  function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  function checkOrthogonality(vectors1, vectors2) {
    for (let i = 0; i < vectors1.length; i++) {
      let result = dotProduct(vectors1[i], vectors2[i]);
      if (result === 0) {
        console.log(`Vector pair ${i + 1} is orthogonal.`);
      } else {
        console.log(`Vector pair ${i + 1} is NOT orthogonal.`);
      }
    }
  }
  
  // Example usage
  const vectors1 = [
    [1, 2, -1],
    [1, 0, 0]
  ];
  
  const vectors2 = [
    [2, -1, 0],
    [0, 1, 0]
  ];
  
  checkOrthogonality(vectors1, vectors2);
  