
const app = require('./app');
const {pool} = require('./database-connection');



//connection with DB



//cloudinary config


app.listen(process.env.PORT , ()=>{
    console.log(`Serving is running at port : ${process.env.PORT}`);
   pool.connect().then(()=>console.log(`connected to db`))
})
