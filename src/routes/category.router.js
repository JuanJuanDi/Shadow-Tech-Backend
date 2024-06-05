const {Router} = require('express');
const { createCategory, getcategorys, getcategorysById, upDateCategoryById, deleteCategoryById } = require('../controllers/category.controller');
const router = Router();


router.post('/', createCategory);
router.get('/', getcategorys);
router.get('/:id', getcategorysById);
router.patch('/:id', upDateCategoryById);
router.delete('/:id', deleteCategoryById);


module.exports = router