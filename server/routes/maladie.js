var express = require('express');
const MaladieControllers = require('../controllers/ControllerMaladie');
var router = express.Router();
MaladieControllers
/* GET home page. */
router.post('/maladiepost',MaladieControllers.PostMaladie );

module.exports = router;
