import nodemailer from 'nodemailer';

const sendEmail = async (option) =>{
    try {
        // Create a transporter using nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Use Gmail as the email service
            host: 'smtp.gmail.com', // SMTP host for Gmail
            port: 465, // SMTP port for Gmail
            secure: true, // Use secure connection (TLS)
            auth: {
                user: process.env.EMAIL, // Email address to send emails from (configured in environment variables)
                pass: process.env.EMAIL_PASSWORD // Password for the email account (configured in environment variables)
            }
        });

        // Send the email using the provided options
        const info = await transporter.sendMail(option);
        console.log("Message sent: %s", info.messageId); // Log the message ID after successfully sending the email

    } catch (error) {
        throw new Error(error.message); // Throw an error if there's any issue sending the email
    }
}

export{
    sendEmail
}