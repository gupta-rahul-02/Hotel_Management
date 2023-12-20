class QueryGetter {
  constructor() {}

  static updateQuery = (updateObject) => {
    let updateValues = [];
    const {tableName, id} = updateObject
    console.log(updateObject)
    delete updateObject.id
    delete updateObject.tableName

    for (const key in updateObject) {
      if (Object.hasOwnProperty.call(updateObject, key)) {
        if (key === "amount" || key === "discount") {
          let value = parseFloat(updateObject[key]);
          updateValues.push(`${key} = ${value}`);
        } else {
          updateValues.push(`${key} = '${updateObject[key]}'`);
        }
      }
    }
    updateValues = updateValues.toString();
   // console.log(updateValues);
    let query =
      `UPDATE ${tableName}s SET ` +
      updateValues +
      ` WHERE ${tableName}id = ${id}`;
    console.log(query);
    return query;
  };

  static insertQuery = (insertObject) =>{
    //console.log(insertObject)
    let insertColumn = [];
    let insertValue = [];
    
    const{tableName} = insertObject;
    delete insertObject.tableName;

    for(const key in insertObject){
      if(Object.hasOwnProperty.call(insertObject,key)){
        //insertValue.push(`${key} = ${insertObject[key]}`);
        insertColumn.push(`${key}`)
        insertValue.push(`${insertObject[key]}`)
      }
    }

    insertColumn = insertColumn.toString();
    insertValue = Array.from(insertValue, word => `'${word}'`);
    insertValue = insertValue.toString()
    let query = `INSERT INTO ${tableName}s (` + insertColumn + `) ` + `VALUES (`+`${insertValue})`;
    console.log(query)
    return query;
  }

}

module.exports = QueryGetter;
