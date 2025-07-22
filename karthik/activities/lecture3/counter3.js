// Correct way to solve the problem in counter 1 - using an additional closure

function makeCounters(n) {
	var counts = [];
	var counters = [];
	for (var i=0; i<n; i++) {
		counts[i] = 0;
		var lambda = (function(j) {
			return function() {
				counts[j]++;
				return counts[j];
			}
		});
		counters[i] = lambda(i);
	};
	return counters;
}

var cs = makeCounters(10);
console.log( cs[0]() );
console.log( cs[4]() );
console.log( cs[2]() );
console.log( cs[4]() );
console.log( cs[0]() );
console.log( cs[2]() );
console.log( cs[4]() );

