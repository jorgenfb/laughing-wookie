var _ = require('lodash');

module.exports.visualize = function(bricks){
	var maxX = _.max(bricks, function(brick){
		return brick.position.x;
	}).position.x;
	var maxY = _.max(bricks, function(brick){
		return brick.position.y;
	}).position.y;

	var canvas = _.map(_.range(0, maxY + 1), function(){
		return _.map(_.range(0, maxX*2 + 1), function(){ return ' '});
	});

	_.forEach(bricks, function(brick){
		canvas[brick.position.y][brick.position.x*2] = brick.id + '';

		if (brick.id > 9){
			// Remove space after
			canvas[brick.position.y][brick.position.x*2 + 1] = '';
		}
	});

	console.log(_.repeat('-', maxX * 2 + 1));
	_.forEach(canvas.reverse(), function(line){
		console.log(line.join(''));
	});
	console.log(_.repeat('-', maxX * 2 + 1));
}