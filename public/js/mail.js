console.log("mail.js script")
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'd2635f650c0e99d0b8e6638e6d66547b-a65173b1-42b693b0',
        domain: 'sandbox6dea089437704590bb56058b01be1025.mailgun.org'
    }
};

const transporter= nodemailer.createTransport(mailGun(auth));

const sendMail = (data) => {
    formFills = JSON.stringify(data);
    console.log( "in sendmail function", formFills)
    
    const mailOptions = {
        from: formFills.email, 
        to: "ameliaaltman22@gmail.com",
        subject: formFills.subject,
        text: formFills.text ,
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err) {
            console.log("error,", err)
            cb(err, null);
        } else {
            console.log ("Message Sent")
            cb(null, data);
        }
    });
};

module.exports = sendMail;
