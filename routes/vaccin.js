var express = require('express');
const VaccinControllers = require('../controllers/ControllerVaccin');
var router = express.Router();



router.post('/vaccinpost',VaccinControllers.PostVaccin );
router.get('/detailvaccin/',VaccinControllers.AfficheDetailVaccinUser)


module.exports=router