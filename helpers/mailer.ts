import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({email, emailType, userId}: any) => {
    try {
        // Create hash token
        const hashToken = await bcryptjs.hash(userId.toString(), 10)
        
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                {verifyToken: hashToken,
                verifyTokenExpiry: Date.now() + 3600000})
        } else if(emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                {forgotPasswordToken: hashToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000})
        }

        // Using nodemailer
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.MAILER_USER,
              pass: process.env.MAILER_PASS,
            }
          });

          const mailOptions = {
            from: 'tobiadetimehin@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verify?token=${hashToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"}</p>`
          }

          const mailResponse = await transport.sendMail(mailOptions);
          return mailResponse


    } catch (error: any) {
        throw new Error(error.messsage)
    }
}