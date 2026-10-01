let express = require('express');
let Employee = require('../employee');

let router = express.Router();

router.post('/', async (req, res) => {
	let employee = await Employee.create(req.body);
	res.status(201).json(employee);
});

router.get('/', async (req, res) => {
	let employees = await Employee.find();
	res.json(employees);
});

module.exports = router;
