const Room = require('../model/room.model');


exports.getAllRooms = async(req,res) =>{
    let allRooms =  await Room.getAllRooms();

    res.json(allRooms)
}