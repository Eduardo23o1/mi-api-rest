const express = require('express'); 
const createDBConnection = require('./config/bd'); 
const cors = require("cors"); 

const app = express(); 

createDBConnection(); 

app.use(cors())

app.use(express.json()); 

app.use('/mi-api-rest', require('./routes/Routes')); 


app.listen(4000, ()=>{
    console.log("EL SERVIDOR ESTA CORRIENDO PERFECTAMENTE"); 
})