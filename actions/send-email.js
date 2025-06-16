'use server';

import { Resend } from "resend";
import EmailTemplate from "@/emails/template";

export async function sendEmail(){
    const resend = new Resend(process.env.RESEND_API_KEY||"");

    try{
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
    to:"prathamesh.jakkula.01042005@gmail.com",
    subject:"budget Alert",
    react: EmailTemplate(),
        })
        return{success:true,data};
    }
    catch(error){
        console.log("Failed to send email",error);
        return {success:false,error};
        
    }
}