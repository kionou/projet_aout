var express = require('express');
const AdminControllers = require('../controllers/ControllerAdmin');
var router = express.Router();


/* GET home page. */
router.get('/',AdminControllers.AfficheAll);
router.get('/admin', function(req, res, next) {
  res.render('admin');
});
router.get('/edit/:id',AdminControllers.Edit);
router.post('/updatePatient',AdminControllers.UpdatePatient);
router.get('/insertdoctor',AdminControllers.InsertDoctor);
router.post('/insertdoctor',AdminControllers.InsertDoctorPost);

module.exports = router;
