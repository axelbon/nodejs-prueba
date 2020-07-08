var nodemailer = require('nodemailer');
var express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


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
  console.log('test pls pls pls pls');
    res.status(200).send('ESTO ES UN TEST !@#');
});

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3100;
console.log(port);
const server = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});


