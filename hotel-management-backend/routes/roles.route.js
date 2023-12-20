const express = require('express');
const { getAllRoles , addRole, updateRole, save} = require('../controller/roles.controller');
const router = express.Router();

router.route('/getAll').get(getAllRoles)
router.route('/add').post(addRole)
// router.route('/addtest').post(save)
router.route('/update').put(updateRole)

module.exports = router;