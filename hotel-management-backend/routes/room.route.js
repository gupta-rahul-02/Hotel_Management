const express = require('express');
const { getAllRooms } = require('../controller/room.controller');
const router = express.Router();


router.route('/getAll').get(getAllRooms)

module.exports = router;