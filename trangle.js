function trangle(a, b, c ) {
  if (a ==b && b == c) {
    console.log("equilateral");
  } else if (a == b || a == c || b == b) {
    console.log("isosceles.");
  } else {
    console.log("scalene.");
  }
}
trangle(8, 8, 8);   
trangle(9, 9, 8);   
trangle(3, 4, 6);