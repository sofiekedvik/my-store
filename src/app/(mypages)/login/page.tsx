import React from "react";

export default function Login() {
  async function onSubmitForm(e: any) {
    "use server";
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <div className="">
      <h1>Login</h1>
      <p>Welcome to your store! Please login to access your account.</p>
      <form className="flex my-16 flex-col gap-4 [&>input]:border [&>input]:rounded-[4px] [&>input]:p-[8px] max-w-[700px]">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" placeholder="Password" />
        <div>
          <button
            type="submit"
            onClick={onSubmitForm}
            className="bg-blue-500 text-white p-2 rounded-md mt-2 px-10"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
