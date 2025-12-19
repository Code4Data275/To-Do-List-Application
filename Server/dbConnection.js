const mongoose = require('mongoose');

const dbConnection = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/');
        console.log("Database connected successfully");
    }catch(error){
        console.log('Connection failed',error.message);
        process.exit(1);
    }
}

module.exports = dbConnection;