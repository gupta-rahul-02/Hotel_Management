const express = require('express');
const { getAllRooms, addRoom, updateRoom , addRoomTest} = require('../controller/room.controller');
const router = express.Router();


router.route('/getAll').get(getAllRooms)
router.route('/add').post(addRoom)
router.route('/addtest').post(addRoomTest)
router.route('/update').put(updateRoom)

module.exports = router;