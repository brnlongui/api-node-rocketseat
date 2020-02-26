const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/nodeapi:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true,
});

require('./controllers/AuthController')(app);
require('./controllers/ProjectController')(app);

app.listen(3000);