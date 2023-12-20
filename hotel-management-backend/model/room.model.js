const { sql } = require("../database-connection");
const QueryGetter = require("../utils/query-generator");

class Room{
    constructor(){

    }

    static save(name,description,capacity,roomNo){
        //let query = QueryGetter.insertQuery()
        let room =  sql(`INSERT INTO ROOMS(
            NAME,DESCRIPTION,CAPACITY,ROOMNO
        )VALUES('${name}','${description}','${capacity}','${roomNo}')`)
        return room
    }

    static saveTest(insertData){
        let query = QueryGetter.insertQuery(insertData)
        sql(query)
    }

    static getAllRooms (){
        let allRoom = sql('select * from rooms');
        return allRoom;
    }

    static update(updateData){
        let query = QueryGetter.updateQuery(updateData)
        sql(query)
    }
}

module.exports = Room;