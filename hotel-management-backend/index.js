
const app = require('./app');
const {connect} = require('./database-connection');

// const con = pool.request()


//connection with DB



//cloudinary config


app.listen(process.env.PORT ,async ()=>{
    console.log(`Serving is running at port : ${process.env.PORT}`);
  await connect().then(()=>console.log(`connected to db`))
})
