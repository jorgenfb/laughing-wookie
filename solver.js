var _ = require('lodash');

// Find all task ready to be executed
function getAvailableTasks(tasks){
	return tasks.filter(function(task){
		return task.deps.length === 0;
	});
}

// Find the next task to execute
function getNextTask(availableTasks, current){
	var index;
	if (!current) {
		// Pick random starting point
		index = parseInt(Math.random() * availableTasks.length);
	} else {
		// Find closes task
		var minSqrtDist = Infinity;
		availableTasks.forEach(function(task, i){
			var xDist = Math.abs(current.position.x - task.position.x);
			var yDist = Math.abs(current.position.y - task.position.y);
			var sqrtDist = Math.pow(xDist,2) + Math.pow(xDist, 2);

			if (sqrtDist < minSqrtDist) {
				minSqrtDist = sqrtDist;
				index = i;
			}
		});
	}
	var task = availableTasks[index];
	availableTasks.splice(index, 1);

	return task;
}

function updateAvailable(availableTasks, current){
	// Update available tasks
	current.requiredBy.forEach(function(task){
		var allDone = _.every(task.deps, function(dep){
			return dep.done;
		});

		if (allDone){
			availableTasks.push(task);
		}
	});
}

module.exports.solve = function(tasks){
	var availableTasks = getAvailableTasks(tasks);
	var current = undefined;
	while (availableTasks.length > 0) {
		// Pick task
		current = getNextTask(availableTasks, current);

		// Do task
		console.log('Doing task ' + current.id);
		current.done = true;

		updateAvailable(availableTasks, current);
	}
}
