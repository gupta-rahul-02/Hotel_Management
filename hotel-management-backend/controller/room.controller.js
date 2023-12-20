const Room = require('../model/room.model');


exports.getAllRooms = async(req,res) =>{
    let allRooms =  await Room.getAllRooms();
    
    res.json(allRooms)
}

exports.addRoom = async(req,res) =>{
    const { name, description, capacity, roomNo} = req.body
    console.log(req.body)
    // let room = await Room.save()
    let room = await Room.save(name,description,capacity,roomNo)
    res.json(room)
}

exports.addRoomTest = async(req,res) =>{
    await Room.saveTest(req.body)
    res.status(200).json({msg:'Room added using test'})
}

exports.updateRoom = async(req,res) =>{
    await Room.update(req.body)
    res.status(201).json({msg:'room updated'})
}