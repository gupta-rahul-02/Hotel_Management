const { sql } = require("../database-connection");

class Room{
    constructor(){

    }

    static save(roomId,name,description,capacity,roomNo){
        let room =  sql(`INSERT INTO ROOMS(
            ROOMID,NAME,DESCRIPTION,CAPACITY,ROOMNO
        )VALUES('${roomId}','${name}','${description}','${capacity}','${roomNo}')`)
        return room

    }

    static getAllRooms (){
        let allRoom = sql('select * from rooms');
        return allRoom;
    }
}

module.exports = Room;