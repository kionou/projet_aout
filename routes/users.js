var express = require('express');
const UserControler = require('../controllers/controllerUser');
var router = express.Router();

/* GET users listing. */
router.post('/userpost', UserControler.PostUser);
router.get('/alluser', UserControler.AfficherUserAll);
router.post('/userconnexion',UserControler.ConnexionUser)
router.get('/tokenId/:id',UserControler.ConnexionToken)
router.get('/detailuser',UserControler.AfficheDetailUserId)
router.post('/updateuser',UserControler.UpdateUser)
router.delete('/deleteuser/:id',UserControler.DeleteUser)







router.get('/userget', UserControler.GetUser);





module.exports = router;
