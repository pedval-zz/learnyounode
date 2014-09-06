function doubleAll(numbers) {
	var map = Array.prototype.map;
	numbers.map(function(number){
		return number*2;
	});
}

module.exports = doubleAll;