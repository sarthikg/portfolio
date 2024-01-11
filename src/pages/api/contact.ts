import { z } from "astro/zod";
import type { APIContext, Props } from "astro";
import { zfd } from "zod-form-data";
import nodemailer from "nodemailer";

/**
 * Set prerendering to false to be rendered on the server
 */
export const prerender = false;

/**
 * Schema for the form data.
 */
const formSchema = zfd.formData({
  name: zfd.text(),
  email_id: zfd.text(z.string().email()),
  subject: zfd.text(),
  message: zfd.text().optional(),
});

/**
 * Processes a POST request and sends an email with the submitted data.
 *
 * @param {APIContext<Props>} context - The API context object.
 * @returns {Promise<Response>} A promise that resolves to the response.
 */
export async function POST({ request }: APIContext<Props>): Promise<Response> {
  try {
    const data = await request.formData();

    // Honeypot for preventing spam
    if (data.get("email_id_confirm") !== "") {
      return new Response("Unexpected request!", { status: 400 });
    }

    const parsedData = formSchema.parse(data);

    await sendEmail(
      parsedData.email_id,
      parsedData.name,
      parsedData.subject,
      parsedData.message,
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.format()), { status: 400 });
    } else {
      console.log(error);
      return new Response("Something went wrong!", { status: 500 });
    }
  }
  return new Response("Submitted!", { status: 200 });
}

/**
 * Sends an email with the given details.
 *
 * @param {string} fromEmail - The email address of the sender.
 * @param {string} fromName - The name of the sender.
 * @param {string} subject - The subject of the email.
 * @param {string} message - The content of the email.
 * @return {Promise<any>} A promise that resolves when the email is sent successfully.
 */
async function sendEmail(
  fromEmail: string,
  fromName: string,
  subject: string,
  message: string,
) {
  const transporter = getTransporter();
  const emailBody = getEmailBody(fromEmail, fromName, message);

  return await transporter.sendMail({
    from: import.meta.env.FROM_ADDRESS,
    to: [import.meta.env.FROM_ADDRESS],
    replyTo: [fromEmail],
    subject: `[Contact Request] ${subject}`,
    html: emailBody,
  });
}

/**
 * Generates the email body for a given email.
 *
 * @param {string} fromEmail - The email address of the sender.
 * @param {string} fromName - The name of the sender.
 * @param {string} message - The message content of the email.
 * @return {string} The generated HTML email body.
 */
function getEmailBody(
  fromEmail: string,
  fromName: string,
  message: string,
): string {
  return `
  <html>
    <head>
      <meta http–equiv=“Content-Type” content=“text/html; charset=UTF-8” />
      <meta http–equiv=“X-UA-Compatible” content=“IE=edge” />
      <meta name=“viewport” content=“width=device-width, initial-scale=1.0 “ />
      <style>
        * { padding: 0; margin: 0; }
        @media only screen and (max-width: 600px)  .content {
          font-size: 1rem;
        } }
        @media only screen and (min-width: 600px) .content {
          font-size: 1.2rem;
        } }
      </style>
    </head>
    <body style="padding: 2% 3%; font-family: sans-serif; max-width:600px; margin: auto">
      <div style="background-color: #f5f5f5; padding: 2rem">
        <div class="content">
          <p style="padding: 0.5rem 0"><b>Name : ${fromName}</b></p>
          <p style="padding: 0.5rem 0"><b>Email : ${fromEmail}</b></p>
          <p style="padding: 0.5rem 0">Message : ${message}</p>
        </div>
      </div>
    </body>
  </html>`;
}

/**
 * Returns a nodemailer transporter object configured with the environment variables.
 *
 * @return {Transporter} - The configured nodemailer transporter object.
 */
function getTransporter() {
  return nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: parseInt(import.meta.env.SMTP_PORT),
    secure: false,
    auth: {
      user: import.meta.env.SMTP_USERNAME,
      pass: import.meta.env.SMTP_PASSWORD,
    },
  });
}
