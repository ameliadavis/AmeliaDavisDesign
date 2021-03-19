console.log("mail.js script")
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        api_key: process.env. api_key,
        domain: process.env.domain
    }
};

const transporter= nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, ) => {
   
    const mailOptions = {
        from: "ameliaaltman22@gmail.com", 
        to: "ameliaaltman22@gmail.com",
        subject: subject,
        formEmail: email,
        text: text ,
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err) {
           console.log('Error: ', err)
        } else {
            console.log ("Message Sent")
        }
    });

    alert("Thank you for your email!");
};

module.exports = sendMail;
