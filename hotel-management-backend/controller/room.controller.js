const Room = require('../model/room.model');


exports.getAllRooms = async(req,res) =>{
    let allRooms =  await Room.getAllRooms();
    
    res.json(allRooms)
}

exports.addRoom = async(req,res) =>{
    const {roomId, name, description, capacity, roomNo} = req.body
    console.log(req.body.roomId)
    let room = await Room.save(roomId,name,description,capacity,roomNo)
    res.json(room)
}