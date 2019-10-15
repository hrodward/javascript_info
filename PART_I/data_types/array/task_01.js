
"use strict";

let replaceMiddle = (array, newValue) => {
  let middleIdx = Math.round(array.length / 2);
  array[middleIdx - 1] = newValue;
}

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
replaceMiddle(styles, "Classics");
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);

