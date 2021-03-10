console.log("mail.js script")
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        user: process.env. api_key,
        pass: process.env.domain
    }
};

let transporter = nodemailer.createTransport(auth);


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
            console.log("error,", err)
            (err, null);
        } else {
            console.log ("Message Sent")
            (null, data);
        }
    });
};

module.exports = sendMail;
