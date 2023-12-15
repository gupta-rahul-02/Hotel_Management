const express = require('express');
const { getAllRooms, addRoom } = require('../controller/room.controller');
const router = express.Router();


router.route('/getAll').get(getAllRooms)
router.route('/add').post(addRoom)

module.exports = router;