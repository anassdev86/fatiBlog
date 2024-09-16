const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


const mongoose = require('mongoose');
const app = require('./app');
const URL = 'mongodb://localhost:27017/Nodeprojects';



const DB_URL = process.env.DATABASE_MONGODB
.replace('<password>', process.env.DATABASE_PASSWORD);


mongoose.connect(DB_URL)
        .then(res => console.log('DATABASE CONNECTED :)'))
        .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('SERVER RUN AT '+ PORT));

