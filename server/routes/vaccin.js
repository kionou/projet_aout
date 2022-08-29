var express = require('express');
const VaccinControllers = require('../controllers/ControllerVaccin');
var router = express.Router();



router.post('/vaccinpost',VaccinControllers.PostVaccin );


module.exports=router