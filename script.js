function indexOfIgnoreCase(str, subStr) {
  // write your code here
	if (subStr === "") return 0;
  const lowerStr = str.toLowerCase();
  const lowerSub = subStr.toLowerCase();
  return lowerStr.indexOf(lowerSub);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
