/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  beforeAll,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  test,
  vi,
} from "vitest";
import * as contact from "./contact";
import nodemailer from "nodemailer";

describe("contact api", () => {
  it("getTransporter returns the correct transporter object", () => {
    vi.spyOn(nodemailer, "createTransport").mockImplementation((): any => {});
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

  it("sendEmail sends the correct email", () => {
    const contactParams = ["fDQ6g@example.com", "John Doe", "Hello, World!"];
    const emailBody = "Test Body";
    const transporter = {
      sendMail: vi.fn().mockImplementation((config: any): any => {}),
    } as any;

    vi.spyOn(contact, "getEmailBody").mockReturnValue(emailBody);
    vi.spyOn(contact, "getTransporter").mockReturnValue(transporter);

    contact.sendEmail(
      ...(contactParams as [string, string, string]),
      emailBody,
    );

    expect(contact.getTransporter).toHaveBeenCalled();
    expect(contact.getEmailBody).toHaveBeenCalledWith(...contactParams);
    expect(transporter.sendMail).toHaveBeenCalledWith({
      from: import.meta.env.FROM_ADDRESS,
      to: [import.meta.env.FROM_ADDRESS],
      replyTo: [contactParams[0]],
      subject: `[Contact Request] ${contactParams[2]}`,
      html: emailBody,
    });
  });
});
