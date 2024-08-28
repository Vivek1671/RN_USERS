const mongoose = require('mongoose')

mongoose.connect(process.env.MongoUrl)
.then(()=>{
    console.log('====================================');
    console.log("Database Connected Successfully");
    console.log('====================================');
}).catch((err)=>{
    console.log('====================================');
    console.log("Error: "+err);
    console.log('====================================');
})