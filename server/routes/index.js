var express = require('express');
const AdminControllers = require('../controllers/ControllerAdmin');
var router = express.Router();


/* GET home page. */
router.get('/',AdminControllers.AfficheAll);
router.get('/admin', function(req, res, next) {
  res.render('admin');
});

module.exports = router;
