const express = require('express');
const { getAllRoles , addRole, updateRole} = require('../controller/roles.controller');
const router = express.Router();

router.route('/getAll').get(getAllRoles)
router.route('/add').post(addRole)
router.route('/update').put(updateRole)

module.exports = router;