import nodemailer from "nodemailer";

const user = atob(process.env.NEXT_PUBLIC_NODEMAILER_EMAIL);
const pass = atob(process.env.NEXT_PUBLIC_NODEMAILER_SECRET);

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com.",
  pool: true,
  port: 465,
  secure: true,
  auth: {
    type: "login",
    user,
    pass,
  },
});

export async function SenMailer({
  email,
  name,
  text,
}: {
  email: string;
  text: string;
  name: string;
}) {
  const { rejected } = await transporter.sendMail({
    to: "gumurdiga@gmail.com",
    text: `${text} ${email}`,
    subject: `Enviado por ${name}, do nosso portfólio`,
  });

  return {
    success: rejected.length === 0,
  };
}
// transporter.verify((error, success) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log("Server is ready to take our messages");
// 	}
// });
