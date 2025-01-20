"use server";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  console.log(rawFormData);
  redirect("/settings");
}
