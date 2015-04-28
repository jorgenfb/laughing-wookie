function Brick(id, position, deps){
	this.id = id;
	this.position = position;
	this.deps = deps || [];
}

module.exports = [
	new Brick(1,  {x:  1, y: 0}),
	new Brick(2,  {x:  3, y: 0}),
	new Brick(3,  {x:  5, y: 0}),
	new Brick(4,  {x:  2, y: 1}, [1, 2]),
	new Brick(5,  {x:  4, y: 1}, [2, 3]),
	new Brick(6,  {x:  9, y: 0}),
	new Brick(7,  {x: 11, y: 0}),
	new Brick(8,  {x: 13, y: 0}),
	new Brick(9,  {x: 10, y: 1}, [6, 7]),
	new Brick(10, {x: 12, y: 1}, [7, 8]),
	new Brick(11, {x: 11, y: 2}, [9, 10]),
	new Brick(12, {x:  3, y: 2}, [4, 5])
];