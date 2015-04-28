module.exports = function describe(tasks){
	tasks.forEach(function(task){
		var deps = task.deps.map(function(task){
			return task.id;
		}).join(', ');
		var reqs = task.requiredBy.map(function(task){
			return task.id;
		}).join(', ');

		deps = deps || 'no task';
		reqs = reqs || 'no task';
		console.log(`Task ${task.id}\n    depends on ${deps}\n    required by ${reqs}`);
	});
}