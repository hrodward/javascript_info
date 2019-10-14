let options = {
  title: "Menu",
  width: 45
};

let {width : w = prompt("width?"), title = prompt("title?")} = options;

console.log(title);  // Menu
console.log(w);  // (whatever the result of prompt is)