const express = require('express');
const app = express();
const {MONGODB_URI } = require('./utils/config');
const {info,error} = require('./utils/logger');
const blogsRouter = require('./controllers/blogs');
const cors = require('cors');
const mongoose = require('mongoose');
const { errorhandler } = require('./utils/middleware');


info('connecting to database');
mongoose.connect(MONGODB_URI).then(()=>{
    info('database connected');
}).catch((err)=>{
    error(err);
});

app.use(cors());
app.use(express.json());
app.use('/api/blogs',blogsRouter);

app.use(errorhandler);



module.exports = app;