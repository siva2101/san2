'use server';

import nodemailer from 'nodemailer';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
    captchaToken: string | null;
}

interface ActionResponse {
    success: boolean;
    message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<ActionResponse> {
    const { name, email, message, captchaToken } = data;

    if (!name || !email || !message) {
        return { success: false, message: 'Please fill in all fields.' };
    }

    if (!captchaToken) {
        return { success: false, message: 'Please complete the CAPTCHA.' };
    }

    // 1. Verify CAPTCHA
    // NOTE: You need to get your Secret Key from the Google reCAPTCHA console
    const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    if (RECAPTCHA_SECRET_KEY) {
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
        try {
            const captchaRes = await fetch(verifyUrl, { method: 'POST' });
            const captchaValidation = await captchaRes.json();

            if (!captchaValidation.success) {
                return { success: false, message: 'CAPTCHA verification failed.' };
            }
        } catch (error) {
            console.error('Captcha verification error:', error);
            // Allow to proceed if verification errors out? Or fail? Usually fail safer.
            return { success: false, message: 'CAPTCHA verification failed.' };
        }
    } else {
        console.warn('RECAPTCHA_SECRET_KEY is not set. Skipping server-side verification.');
    }

    // 2. Send Email
    // NOTE: Configure these environment variables for real email sending
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.warn('SMTP configuration missing. Logging message instead.');
        console.log('--- NEW CONTACT MESSAGE ---');
        console.log('From:', name, `<${email}>`);
        console.log('Message:', message);
        console.log('---------------------------');

        // Simulate success for demo purposes if no SMTP is configured
        return { success: true, message: 'Message sent successfully (simulated)!' };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false // Helps in development/test envs
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: "sans@dropjar.com", // list of receivers
            subject: `New Contact Inquiry from ${name}`, // Subject line
            text: message, // plain text body
            html: `
        <h3>New Message from Sanskriti Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `, // html body
        });

        return { success: true, message: 'Message sent successfully!' };

    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, message: 'Failed to send message. Please try again later.' };
    }
}
