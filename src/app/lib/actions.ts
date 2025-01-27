"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  username: z.string({
    invalid_type_error: "Invalid Username",
  }),
  password: z.string({
    invalid_type_error: "Invalid password",
  }),
});

export async function signIn(prevState: any, formData: FormData) {
  console.log("formData", formData, "prevState", prevState);
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const validatedFields = schema.safeParse(rawFormData);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      messages: validatedFields.error.flatten().fieldErrors,
    };
  }

  //   revalidatePath("/login");
  //   redirect("/settings");
}
