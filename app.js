// var express = require("express");
// var app = express();
// var port = 3000;

// app.use(express.json())
// app.use('/static',express.static('static'));

// app .use(express.static('./views/'))
//     .get('/',function (req,res) {
//         res.sendFile('/views/index.html');
//         })
 
//    app.listen(port, () => {
//        console.log("Server listening on port ");
// });
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/portfolio', {useNewUrlParser: true, useUnifiedTopology: true});

// //This Schema Is Updated For Our Form Data

// const messageSchema = new mongoose.Schema({
//     name: String,
//     subject: String,
//     email: String,
//     message: String
   
    
//   });

//   const messageData = mongoose.model('Message', messageSchema);


 



// app.post("/addname", (req, res) => {
//     var myData = new messageData(req.body);
//     myData.save()
//     .then(item => {
//     res.send("Message Sent")
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
//    });
 
   