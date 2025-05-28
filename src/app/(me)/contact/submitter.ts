"use server";

import dayjs from "dayjs";
import { cookies } from "next/headers";

import { SenMailer } from "@/lib/nodemailer";
import { userCanSendEmail } from "@/util/useCanSendEmail";

interface IResponseEmail {
  message: string;
  success: boolean;
}

export async function submitter(form: FormData): Promise<IResponseEmail> {
  const cookie = await cookies();
  const userCan = userCanSendEmail(cookie);

  const { email, name, text } = {
    email: form.get("email")?.toString(),
    name: form.get("name")?.toString(),
    text: form.get("text")?.toString(),
  };

  if (userCan) {
    const { success } = await SenMailer({
      email,
      name,
      text,
    });

    if (success) {
      (await cookies()).set({
        name: "dateSendLastEmail",
        value: dayjs().toISOString(),
        expires: 60 * 60 * 1000 * 20, // TWENTY MINUTES,
        maxAge: 60 * 60 * 24 * 30, // ONE MONTH
        path: "/",
      });
      return {
        message: `Eai ${name}, estou feliz em te dizer que sua mensagem foi enviada, o mais rápido possível entrarei em contato com você! Até mais 😊`,
        success: true,
      };
    }
  }

  return {
    message:
      "Hum...? Acredito que você não pode enviar mais que 1 e-mail em um curto período de tempo, aguarde mais alguns instantes e tente novamente",
    success: false,
  };
}
