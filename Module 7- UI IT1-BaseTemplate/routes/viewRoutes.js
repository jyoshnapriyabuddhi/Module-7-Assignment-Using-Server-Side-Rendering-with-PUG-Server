const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/login', viewsController.getLoginForm);
router.get('/signIn', viewsController.getSignInForm);
router.get('/loginUser', viewsController.getLoginUser);
router.get('/newUser', viewsController.createNewUser);
router.get('/Course', viewsController.getCourse);
router.get('/newCourse', viewsController.createNewCourse);

module.exports = router;
