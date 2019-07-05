let points = {
  a1: 0,
  a2: 0,
  b1: 0,
  b2: 0,
  c1: 0,
  c2: 0
}

points.a1 = prompt('Enter A1 value');
points.a2 = prompt('Enter A2 value');
points.b1 = prompt('Enter B1 value');
points.b2 = prompt('Enter B2 value');
points.c1 = prompt('Enter C1 value');
points.c2 = prompt('Enter C2 value');

for(let point in points) {
  if (!isNaN(parseFloat(points[point])) && isFinite(points[point])) {
    continue;
  } else {
    throw new SyntaxError('"' + point + '" should be numeric value!');
  }
}

const divider = 2;
const mid1 = (+points.a1 + +points.c1) / divider;
const mid2 = (+points.a2 + +points.c2) / divider;

if(mid1 !== +points.b1 || mid2 !== +points.b2) {
  console.log(false);
} else {
  console.log(true);
}