// Add your functions here
// map
function map(sourceArray, callback) {
    return sourceArray.map(element => callback(element))
}

// reduce
function reduce(sourceArray, callback, startingPoint) {
    let total;
    
    if (startingPoint) {
      total = startingPoint;
      for (let i = 0; i < sourceArray.length; i++) {
        total = callback(sourceArray[i], total);
      }
      return total;
    } 
    else {
      total = sourceArray[0];
      for (let i = 1; i < sourceArray.length; i++) {
        total = callback(sourceArray[i], total);
      }
      return total;
    }
}
  
// function map(src, callback) {
//     const r = [];
  
//     for (let i = 0; i < src.length; i++) {
//       const theElement = src[i];
//       r.push(callback(theElement));
//     }
  
//     return r;
//   }
  
//   function reduce(src, callback, startingValue) {
//     let total;
//     if (startingValue) {
//       total = startingValue;
//       for (let i = 0; i < src.length; i++) {
//         total = callback(src[i], total);
//       }
//       return total;
//     } else {
//       total = src[0];
//       for (let i = 1; i < src.length; i++) {
//         total = callback(src[i], total);
//       }
//       return total;
//     }
//   }
