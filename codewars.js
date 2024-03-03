// function getSumOfDigits(integer) {
//     if (integer < 0) return;

//     var sum = 0;
//     var digits =  Math.floor(integer).toString().split("");
//     console.log(digits)
//     for(var i = 0; i < digits.length; i++) {
//       sum += parseInt(digits[i]);
//     }
//         return sum;
//   }

//   console.log(getSumOfDigits(123));
//   console.log(getSumOfDigits())

// expected output 6

// HIGHEST NUMBER IN AN ARRAY

function highestRank(arr) {
  let counts = {};

  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  let maxCount = -Infinity;
  let maxKey = -Infinity;

  for (let key in counts) {
    if (
      counts[key] > maxCount ||
      (counts[key] === maxCount && parseInt(key) > parseInt(maxKey))
    ) {
      maxCount = counts[key];
      maxKey = key;
    }
  }

  return parseInt(maxKey);
}
