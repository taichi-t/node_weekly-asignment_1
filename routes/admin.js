const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();
const isAuth = require('../middleware/is-auth');

// @route   GET /admin/add-product
// @desc    Add products form 
// @access  Private
router.get('/add-product', isAuth, adminController.getAddProduct);

// @route   GET /admin/products
// @desc    Get all products
// @access  Private
router.get('/products', isAuth, adminController.getProducts);

// @route   POST /admin/add-product
// @desc    Add a product in products collection
// @access  Private
router.post('/add-product', isAuth, adminController.postAddProduct);

// @route   GET /admin/edit-product
// @desc    Edit product form
// @access  Private
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

// @route   POST /admin/edit-product
// @desc    Edit a certain product
// @access  Private
router.post('/edit-product', isAuth, adminController.postEditProduct);

// @route   POST /admin/delete-product
// @desc    Delete a certain product
// @access  Private
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
