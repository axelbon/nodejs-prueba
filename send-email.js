var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({
    region: 'us-east-2',
    credentials: new AWS.SharedIniFileCredentials()
});

// Create sendEmail params 
var params = {
    TemplateName: 'testtemplate' /* required */
};

var ses = new AWS.SES();

ses.getTemplate(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});
