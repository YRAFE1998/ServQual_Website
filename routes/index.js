// var express = require('express');
// const mongoose = require('mongoose');
// const quotationmodel = require('../models/servqualform');
// const bodyparser = require('body-parser');
// const path = require('path');

// var router = express.Router();

// router.use(bodyparser.json());


// const url = "mongodb://localhost:27017/servqual";
// var connect = mongoose.connect(url);


// router.get('/', function (req, res,next) {
//     res.statusCode = 200;
//     res.setHeader('content-type','text/html');
//     res.sendFile(path.join(__dirname , '..', 'build' , 'index.html'));
// });

// router.get('/:page', (req,res) => {
//     console.log(req.params.page);
//     res.statusCode = 200;
//     res.setHeader('content-type','text/html');
//     res.sendFile(path.join(__dirname,'..', 'build', 'index.html'));
// });
// router.get('/services/:serviceid', (req,res) => {
//     console.log(req.params.serviceid);
//     res.statusCode = 200;
//     res.setHeader('content-type','text/html');
//     res.sendFile(path.join(__dirname,'..', 'build', 'index.html'));
// });

// router
// .post('/submitform', (req,res,next) => {
//   connect.
//   then((db) => {
//     console.log('Connected to Database successfully');
//     quotationmodel.create({
//       name  : req.body.name,
//       phone : req.body.phone,
//       emailaddress : req.body.email,
//       company : req.body.company,
//       message : req.body.message
//     })
//     .then(() => {
//       console.log('Added to Collection');
//       mongoose.connection.close();
//     })
//     .then(() => {
//       res.statusCode = 200;
//       res.setHeader('content-type','text/html');
//       res.sendFile(path.join(__dirname,'..', 'build', 'index.html'));
//     })
//   },
//   (error) => {
//     console.log(error.message);
//     res.statusCode = 404;
//     res.setHeader('content-type','text/html');
//     res.end('<html> <h1> Sorry, the server is experiencing an internal error, Try again later </h1> <p>' + error.message + '</p></html>' );
//   })
//   .catch((error) => {
//     console.log(error.message);
//     res.statusCode = 404;
//     res.setHeader('content-type','text/html');
//     res.end('<html> <h1> Sorry, the server is experiencing an internal error, Try again later </h1> <p>' + error.message + '</p></html>' );
//   });
// });
// module.exports = router;
