function Task(id, position){
	this.id = id;
	this.position = position;
	this.done = false;
	this.requiredBy = [];
}

module.exports = function(bricks) {

	// Build tasks dependencies automatically
	var tasks = bricks.map(function(brick){
		return new Task(brick.id, brick.position);
	});

	// Create map for easy lookup
	var map = new Map();
	tasks.forEach(function(task){
		map.set(task.id, task);
	});

	// Wire deps and required by
	bricks.forEach(function(brick){
		var currentTask = map.get(brick.id);
		currentTask.deps = brick.deps.map(function(id){
			var task = map.get(id);

			task.requiredBy.push(currentTask);

			return task;
		});
	});

	return tasks;
}
