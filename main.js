var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
app.use(express.json());

app.post('/send-email', (req, res) => {
    console.log(req.body);

    var transport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'connor49@ethereal.email',
            pass: 'MC5secr3uZEFGbVhVh',

        }
    });

    var mailOptions = {
        from: 'Remitente',
        to: 'axel.bon.cc@gmail.com',
        subject: 'Enviado desde nodemailer',
        text: 'HELLO WORLD @!#@!LJHK#LK!@#J@L!#K#KJL!@#POIDS@!*(#)@!*()#@'
    };

    transport.sendMail(mailOptions, (error, info) => {
        if(error){
            res.status(500).send(error.message);
        }else{
            console.log('Email enviado.');
            res.status(200).json(req.body);
        }

    });

});

app.get('/stats', (req, res)=>{
    res.status(200).send('ESTO ES UN TEST !@#');
});

app.listen(5000, (req) => {
    console.log(req.headers.host + '/' + req.url);
});


