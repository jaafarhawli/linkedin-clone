const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require('./config/db.config');
const cors = require("cors");
app.use(cors());


const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const peopleRoutes = require('./routes/people.routes');
app.use('/people', peopleRoutes);

const companiesRoutes = require('./routes/companies.routes');
app.use('/companies', companiesRoutes);

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
});