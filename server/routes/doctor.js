var express = require('express');
const DoctorControllers = require('../controllers/ControllerDocteur');
var router = express.Router();

router.post('/doctorpost', DoctorControllers.PostDocteur);
router.post('/doctorconnexion', DoctorControllers.ConnexionDoctor);
router.get('/alldoctor', DoctorControllers.AfficheDoctorAll);
router.get('/detaildoctor/:id',DoctorControllers.AfficheDetailDoctor)
router.get('/updatedoctor',DoctorControllers.UpdateDoctor)
router.delete('/deletedoctor/:id',DoctorControllers.DeleteDoctor)




module.exports = router;