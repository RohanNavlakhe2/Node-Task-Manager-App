const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_EMAIL_API_KEY)

const sendEmail = (emailInfo) => {
    sgMail.send({
        to: emailInfo.receipentEmail, // Change to your recipient
        from: 'rohannavlakhe2@gmail.com', // Change to your verified sender
        subject: emailInfo.subject,
        text: emailInfo.body,
    })
}

module.exports = sendEmail
