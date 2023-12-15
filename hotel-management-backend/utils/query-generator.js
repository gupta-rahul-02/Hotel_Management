class QueryGetter {
  constructor() {}

  static updateQuery = (updateObject) => {
    let updateValues = [];
    const {tableName, id} = updateObject
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

}

module.exports = QueryGetter;
