"use client";
import React from "react";
import { signIn } from "@/app/lib/actions";
import { useActionState } from "react";

const initialState = {
  errors: {
    username: "",
    password: "",
  },
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(signIn, initialState);

  return (
    <div className="">
      <form
        action={formAction}
        className="flex my-16 flex-col gap-4 [&>input]:border [&>input]:rounded-[4px] [&>input]:p-[8px] max-w-[700px]"
      >
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" placeholder="Password" />
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-2 px-10"
            disabled={pending}
          >
            Login
          </button>
          <p aria-live="polite">
            {state?.message?.password} {state?.message?.password}
          </p>
        </div>
      </form>
    </div>
  );
}
