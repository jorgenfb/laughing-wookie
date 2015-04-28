var _ = require('lodash');
var visualizer = require('./visualizer');
var describe = require('./describe');
var problem = require('./problem');
var builder = require('./task-builder');
var solver = require('./solver');

var tasks = builder(problem);
//describe(tasks);
visualizer.visualize(problem);

// Solve problem
solver.solve(tasks);