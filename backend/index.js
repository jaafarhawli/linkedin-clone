const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require('./config/db.config');
const headers = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};

const authRoutes = require('./routes/auth.routes');
app.use('/auth', headers, authRoutes);

const peopleRoutes = require('./routes/people.routes');
app.use('/people', headers, peopleRoutes);

const companiesRoutes = require('./routes/companies.routes');
app.use('/companies', headers, companiesRoutes);

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
});