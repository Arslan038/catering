const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
var fs = require('fs');
const cloudinary = require('cloudinary');
global.__basedir = __dirname;

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  require('./routes/customer.route')(app);
  require('./routes/caterer.route')(app);
  require('./routes/menu.route')(app);
  require('./routes/cart.route')(app);
  require('./routes/order.route')(app);

  app.get('/', (req, res) => {
    res.send("Welcome")
})

const mongoose = require('mongoose');
// Your Mongo Atlas Cluster
// Create a Project on Mongo Atlas and Create a Cluster and than configure it
let dev_db_url = 'mongodb+srv://<username>:<password>@cluster0-zevrx.mongodb.net/test?retryWrites=true&w=majority';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB connected…'))
.catch(err => console.log(err));

app.listen(process.env.PORT || 4000);

// Please create your account on cloudinary and find following keys from Dashboard.
// Make Sure you verified your account via Email after creating to work it properly.
cloudinary.config({ 
  cloud_name: 'CLOUD NAME', 
  api_key: 'YOUR_API_KEY', 
  api_secret: 'YOUR_API_SECRET_KEY' 
});
