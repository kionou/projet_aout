var express = require('express');
const DoctorControllers = require('../controllers/ControllerDocteur');
var router = express.Router();

router.post('/doctorpost', DoctorControllers.PostDocteur);
router.post('/doctorconnexion', DoctorControllers.ConnexionDoctor);
router.get('/alldoctor', DoctorControllers.AfficheDoctorAll);
router.get('/detaildoctor/:id',DoctorControllers.AfficheDetailDoctor)
router.post('/updatedoctor',DoctorControllers.UpdateDoctor)
router.delete('/deletedoctor/:id',DoctorControllers.DeleteDoctor)
router.get('/detaildoctor',DoctorControllers.DetailDoctor)
router.get('/infodoctor/:id',DoctorControllers.InfoDoctor)





module.exports = router;