import { NextResponse } from "next/server";
import { transporter } from "@/utils/nodemailer";
import dns from "dns";

export const POST = async (req) => {
  const { email } = await req.json();

  const domain = email.split("@")[1];
  console.log("Current domain: ", domain);

  // dns.resolveMx(domain, (err, addresses) =>
  //   console.log("mx records: %j", addresses)
  // );

  try {
    const addresses = await dns.promises.resolveMx(domain);
    console.log("mx records: %j", addresses);
  } catch (error) {
    return new NextResponse(
      JSON.stringify(
        {
          message: `Please fill all details properly! ${domain} is invalid or unreachable.`,
        },
        {
          status: 400,
        }
      )
    );
  }

  if (!email) {
    return new NextResponse(
      JSON.stringify(
        { message: "Please fill all details!" },
        {
          status: 400,
        }
      )
    );
  }
  try {
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: email,
      subject: `Thank you for contacting Yash Solanki!`,

      text: `Dear viewer,\nThank you for reaching out to me through my website's contact form. I appreciate the time you've taken to connect with me.\nYour inquiry is important to me, and I am committed to providing you with a prompt response.\nI will address your inquiry with the utmost care and attention it deserves. My typical response time ranges from 1 to 5 days. Rest assured, I will strive to get back to you as soon as possible.\nIn the meantime, if you have any further questions or additional information to provide, please feel free to reach out to me by replying to this email. Your cooperation is greatly appreciated.\nOnce again, thank you for considering me (Yash Solanki). I look forward to the opportunity to assist you further.\nBest regards,\nYash Solanki\n`,

      html: `  <h1>Dear viewer,</h1>
    <p>Thank you for reaching out to me through my website's contact form. I appreciate the time you've taken to connect with me.</p>
    <p>Your inquiry is important to me, and I am committed to providing you with a prompt response.</p>
    <p>I will address your inquiry with the utmost care and attention it deserves. My typical response time ranges from 1 to 5 days. Rest assured, I will strive to get back to you as soon as possible.</p>
    <p>In the meantime, if you have any further questions or additional information to provide, please feel free to reach out to me by replying to this email. Your cooperation is greatly appreciated.</p>
    <p>Once again, thank you for considering me (Yash Solanki). I look forward to the opportunity to assist you further.</p>
    <p>Best regards,<br>Yash Solanki</p>
      `,
    });
    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${email}`,
      text: `Email: ${email}\n . This person has sent you a contact request. Please respond to them.`,
      html: `<h1>Email: ${email}</h1>
      <p>This person has sent you a contact request. Please respond to them.</p>
      `,
    });

    return new NextResponse(
      JSON.stringify(
        { message: "Email sent successfully!" },
        {
          status: 200,
        }
      )
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify(
        { message: "There was an error sending the email." },
        {
          status: 500,
        }
      )
    );
  }
};
