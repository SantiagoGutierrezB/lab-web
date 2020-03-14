let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
let authController = require('../controllers/AuthController');
let authMiddleware = require('../middlewares/AuthMiddleware');

router.get('/dashboard', dashboardController.index);
router.get('/users', authMiddleware.isAuthAdmin, authController.index);

module.exports = router;
