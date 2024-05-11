/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as contact from "./contact";
import nodemailer from "nodemailer";

describe("contact api", () => {
  it("getTransporter returns the correct transporter object", () => {
    vi.spyOn(nodemailer, "createTransport");
    contact.getTransporter();

    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      host: import.meta.env.SMTP_HOST,
      port: parseInt(import.meta.env.SMTP_PORT),
      secure: false,
      auth: {
        user: import.meta.env.SMTP_USERNAME,
        pass: import.meta.env.SMTP_PASSWORD,
      },
    });
  });

  it("getEmailBody returns the correct email body", () => {
    const response = contact.getEmailBody(
      "fDQ6g@example.com",
      "John Doe",
      "Hello, World!",
    );
    expect(response).toContain("Name : John Doe");
    expect(response).toContain("Email : fDQ6g@example.com");
    expect(response).toContain("Message : Hello, World!");
  });
});
