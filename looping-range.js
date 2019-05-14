function range (start, end, step) {
var seriesRange = [];
  if( start === null || end === null || step === null || end < start || step < 0) {
    seriesRange = [];
  } else {
    for(var i = start; i <= end; i = i + step) {
      seriesRange.push(i);
    }
  }
return seriesRange;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

