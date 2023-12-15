const { sql } = require("../database-connection");
const QueryGetter = require("../utils/query-generator");

class Role {
  constructor(name, active) {
    this.name = name,
    this.active = active
  }
   save() {
    sql(
      `INSERT INTO roles(name,updated)
       VALUES ('${this.name}',GETDATE())`
    );
  }
  static getRoles() {
    let allRoles = sql("select * from roles");
    return allRoles;
  }

  static update(updateData){
    let query = QueryGetter.updateQuery(updateData)
    sql(query)
  }
}

module.exports = Role;
