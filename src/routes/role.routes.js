const { Router } = require('express');
const { createRole, getRole, deleteRoleById } = require('../controllers/role.controller');
const router = Router();

router.post('/', createRole);
router.get( '/', getRole);
router.delete('/:id', deleteRoleById);

module.exports = router;