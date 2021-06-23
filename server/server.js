const express=require('express');
const app=express();

const workTime=require('../Middleware/middleware')
app.set("views", '../views');
//set the wiew engine for the app

app.set("view engine","pug");
app.use(express.static('Public'));
app.use('/css', express.static(__dirname + 'public/css'))
//MIDDLEWARE
//app.use('/',workTime);
//HOME
app.get('/', function (req, res){
    res.render('Home',{title:('home')});
});
//SERVICES
app.get('/OurServices', function(req, res){
    res.render('OurServices',{title: ('OurServices')} );
});
//CONTACT US
app.get('/Contactus', function(req, res){
    res.render('Contactus');
});

//listening port
const port=4000;
app.listen(port,()=>console.log(`server is runing on ${port}`))