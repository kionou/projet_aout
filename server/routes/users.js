var express = require('express');
const UserControler = require('../controllers/controllerUser');
var router = express.Router();

/* GET users listing. */
router.post('/userpost', UserControler.PostUser);
router.get('/userget', UserControler.GetUser);
router.get('/tokenId/:id',UserControler.ConnexionToken)
router.post('/userconnexion',UserControler.ConnexionUser)



module.exports = router;
