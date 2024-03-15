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

// KYU 6 - HIGHEST RANK NUMBER IN AN ARRAY

// function highestRank(arr) {
//   let counts = {};

//   arr.forEach((num) => {
//     counts[num] = (counts[num] || 0) + 1;
//   });

//   let maxCount = -Infinity;
//   let maxKey = -Infinity;

//   for (let key in counts) {
//     if (
//       counts[key] > maxCount ||
//       (counts[key] === maxCount && parseInt(key) > parseInt(maxKey))
//     ) {
//       maxCount = counts[key];
//       maxKey = key;
//     }
//   }

//   return parseInt(maxKey);
// }

/* ------------------- POTION CLASS 101 ------------------- */
// class Potion {
//   constructor(color, volume) {
//     this.color = color;
//     this.volume = volume;
//   }

//   mix(otherPotion) {
//     let totalVolume = this.volume + otherPotion.volume;

//     let mixedColor = [
//       Math.ceil(
//         (this.color[0] * this.volume +
//           otherPotion.color[0] * otherPotion.volume) /
//           totalVolume
//       ),
//       Math.ceil(
//         (this.color[1] * this.volume +
//           otherPotion.color[1] * otherPotion.volume) /
//           totalVolume
//       ),
//       Math.ceil(
//         (this.color[2] * this.volume +
//           otherPotion.color[2] * otherPotion.volume) /
//           totalVolume
//       ),
//     ];

//     return new Potion(mixedColor, totalVolume);
//   }
// }

/* ------------------- Bubblesort Once ------------------- */

function bubblesortOnce(a) {
  let result = [...a];

  for (let i = 0; i < result.length; i++) {
    if (result[i] > result[i + 1]) {
      [result[i], result[i + 1]] = [result[i + 1], result[i]];
    }
  }

  return result;
}
