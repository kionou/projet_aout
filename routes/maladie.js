var express = require('express');
const MaladieControllers = require('../controllers/ControllerMaladie');
var router = express.Router();

/* GET home page. */
router.post('/maladiepost',MaladieControllers.PostMaladie );
router.get('/affichemaladie',MaladieControllers.GetMaladie );
router.get('/affichemaladiedetail/:id',MaladieControllers.GetMaladieDetail );
router.get('/updatemaladie',MaladieControllers.UpdateMaladie );
router.delete('/deletemaladie/:id',MaladieControllers.DeleteMaladie );






module.exports = router;
