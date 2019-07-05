let triangle = {
  a: 0,
  b: 0,
  c: 0
}

triangle.a = prompt('Enter A value');
triangle.b = prompt('Enter B value');
triangle.c = prompt('Enter C value');

for(let side in triangle) {
  if (!isNaN(parseFloat(triangle[side])) && isFinite(triangle[side])) {
    continue;
  } else {
    throw new SyntaxError('"' + side + '" should be numeric value!');
  }
}

const a = +triangle.a;
const b = +triangle.b;
const c = +triangle.c;

if(a + b <= c || a + c <= b || c + b <= a) {
  console.log('Triangle doesn’t exist');
} else if(a === b && a === c) {
  console.log('Equivalent triangle');
} else if(a === b || a === c || b === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}