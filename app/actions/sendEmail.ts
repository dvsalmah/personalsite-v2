"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: { name: string; email: string; subject: string; message: string }) {
    if (!process.env.RESEND_API_KEY) {
        return { error: "Resend API key is missing." };
    }

    try {
        const { name, email, subject, message } = formData;

        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "dealovasalmah12@gmail.com",
            subject: `New message from ${name}: ${subject}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (data.error) {
            return { error: data.error.message };
        }

        return { success: true };
    } catch (error) {
        return { error: "Something went wrong while sending the email." };
    }
}
