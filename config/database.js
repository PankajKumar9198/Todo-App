const mongoose = require("mongoose");


require("dotenv").config();// ab jo v .env mai likha hoga sab feed hojayga process k andar
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then( () => console.log("DB ka connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
        // iska matlab kya hota hai?
        process.exit(1);
    });
}

module.exports = dbConnect;