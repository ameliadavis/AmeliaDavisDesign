console.log("mail.js script")
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        // api_key: process.env. api_key,
        // domain: process.env.domain
        api_key: 'd2635f650c0e99d0b8e6638e6d66547b-a65173b1-42b693b0',
        domain: 'sandbox6dea089437704590bb56058b01be1025.mailgun.org'
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
