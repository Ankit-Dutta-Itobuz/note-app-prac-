import express from "express";
import mongoose from "mongoose";
import noteRouter from "./noteRouter.js";

const app = express();
const port = 8080;

mongoose.connect(
    "mongodb+srv://ankit:dutta@cluster0.t6vx0ij.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (success)=> {
        console.log("Connected to MongoDB - ", success);
      },
      (err) => {
          console.log('Failed to connect - ', err);
      }
    );

app.use('/api', noteRouter);

app.use((req, res, next)=>{
   return next(new Error({
        data: null,
        message: 'Page Not found',
        statusCode: 404
    }))
})


app.use((error, req, res, next)=>{
    if(error){
        res.send({
            data: null,
            message: 'Page Not found',
            success: false
        })
    }
})

app.listen(port, () => {
  console.log(`listening to port  ${port}....`);
});

