function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s1lower=s1.toLowerCase();
let s2 lower=s2.toLowerCase();
return s1lower.indexof(s2lower);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
