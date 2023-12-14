const { urlencoded } = require('express');
const express = require('express');
const { pool } = require('./database-connection');
require("dotenv").config();
const app = express();

// const morgan = require('morgan')
//const cookieParser = require('cookie-parser')
// const fileUpload = require('express-fileupload')



//for swagger documentation
// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./swagger.yaml');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//cookies and file middleware
//app.use(cookieParser())
// app.use(fileUpload({
//     useTempFiles:true,
//     tempFileDir: "/tmp/",
// }))

//temp testing for photo upload
// app.set('view engine', "ejs");

// //morgan middleware
// app.use(morgan("tiny"))

app.get("/",async (req,res) =>{
    // console.log(pool.request().query('select * from users'));
let result = await pool.request().query('select rooms.roomno from booking inner join bookingDetails on bookingDetails.bookingid = booking.bookingid inner join rooms on bookingDetails.roomid = rooms.roomid');
    res.send(result)

})


//import all routes here
// const home = require('./routes/home')
// const user = require('./routes/user')


//router middleware
// app.use('/api/v1',home)
// app.use('/api/v1',user)


//export app.js
module.exports = app;