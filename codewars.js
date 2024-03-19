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

// function bubblesortOnce(a) {
//   let result = [...a];

//   for (let i = 0; i < result.length; i++) {
//     if (result[i] > result[i + 1]) {
//       [result[i], result[i + 1]] = [result[i + 1], result[i]];
//     }
//   }

//   return result;
// }

/* ------------------- Count the photos! ------------------- */
const countPhotos = (road) => {
  let start = 0;
  let dot = 0;
  let photoCount = 0;

  for (let i = 0; i < road.length; i++) {
    if (road[i] === ">") {
      start++;
    }

    if (road[i] === ".") {
      photoCount += start;
      dot++;
    }

    if (road[i] === "<") {
      photoCount += dot;
    }
  }

  return photoCount;
};

/* ------------------- Compare Versions ------------------- */
function isFloat(number) {
  return !Number.isInteger(number);
}

function compareVersions(version1, version2) {
  let v1 = version1.split(",").map((str) => Number(str));
  let v2 = version2.split(",").map((str) => Number(str));
  let versions = v1.concat(v2);
  console.log(versions);

  if (versions[0] >= versions[1]) {
    return true;
  }

  if (isNaN(versions[0]) || isNaN(versions[1])) {
    return false;
  }

  if (isFloat(versions[0]) || isFloat(versions[1])) {
    return false;
  }

  if (versions[0] === versions[1]) {
    let subversions1 = version1.split(",").length;
    let subversions2 = version2.split(",").length;

    if (subversions1 > subversions2) {
      return true;
    } else if (subversions1 < subversions2) {
      return false;
    }
  }
}

// test cases

// "Testing versions without subversion"
console.log(compareVersions("11", "10")); // true

// "Test equal versions"
console.log(compareVersions("11", "11")); // true

// "Adding a subversion should make this version \"larger\""
console.log(compareVersions("10.4.6", "10.4")); // true

// "Subversion precedence is smaller than Version"
console.log(compareVersions("10.4", "11")); // false

// "Version value is not the same as its decimal value"
console.log(compareVersions("10.4", "10.10")); // false

// "Adding subversion does not make it larger than a greater version"
console.log(compareVersions("10.4.9", "10.5")); // false

/* ------------------- Backspaces in String ------------------- */
function cleanString(s) {
  if (s.length === 0) return "";

  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join("");
}
