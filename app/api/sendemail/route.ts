import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);

  const file: File | null = formData.get("pdfFile") as unknown as File;

  const { name, email, phone, cover } = fields;

  //   console.log(file.name);

  //   return NextResponse.json("success");

  try {
    // Create a Nodemailer transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "somoarambam123@gmail.com",
        pass: "jnwxahmnfrboooma",
      },
    });

    // Extract form data
    // const { name, email, pdfFile } = req.body;

    // Configure the email options
    const mailOptions = {
      from: `${email}`,
      to: "somoarambam123@gmail.com",
      subject: "Application for Employment",
      text: `Name: ${name}\nMobile Number: ${phone} \n\n ${cover}`,
      attachments: [
        {
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
