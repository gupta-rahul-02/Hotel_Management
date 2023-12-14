const { sql } = require("../database-connection");

class Room{
    constructor(){

    }

    static getAllRooms (){
        let allRoom = sql('select * from rooms');
        return allRoom;
    }
}

module.exports = Room;