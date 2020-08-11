var express = require('express');
var router = express.Router();
var model = require('./../model/tasks.js')();

/* GET home page. */
router.get('/', function(req, res, next) {
	model.find(null, function(error, tasks){
		if (error){
			throw error;
		}
		res.render('index', { title: 'toniad', tasks: tasks});
	});
});


router.post('/add', function(req, res, next){
	var body = req.body;
	body.status = false;
	model.create(body, function(error, task){
		if (error) {
			throw error;
		}
		res.redirect('/');
	});

});

router.get('/turn/:id', function(req, res, next) {
	var id = req.params.id;
	model.findById(id, function(err,task) {
		if (error) {
			throw error;
		}
		task.status = !task.status;
		task.save(function(){
			res.redirect('/');
		});
	});
});


module.exports = router;
