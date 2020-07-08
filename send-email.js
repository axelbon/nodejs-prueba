var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ 
    region: 'us-east-2',
    credentials: new AWS.SharedIniFileCredentials()
});

// Create sendEmail params 
var params = {
    Destination: { /* required */
        ToAddresses: [
            "axel.bon.cc@gmail.com",
            /* more items */
        ]
    },
    Message: { /* required */
        Body: { /* required */
            Html: {
                Charset: "UTF-8",
                Data: "This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>."
            },
            Text: {
                Charset: "UTF-8",
                Data: "This is the message body in text format."
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email'
        }
    },
    ReplyToAddresses: [
    ],
    Source: "axel.bon-@hotmail.com",
};

var ses = new AWS.SES();

ses.sendEmail(params, function (err, data) {
    if (err) console.log('error'); // an error occurred
    else console.log(data);           // successful response
});