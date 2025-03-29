"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  interface RouteFunction {
    (name: string): void;
  }

  const route: RouteFunction = (name) => {
    router.push(name);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    // Simulate login logic
    console.log("Logging in with", { email, password });

    // Redirect to dashboard or another page after successful login
    router.push("/dashboard");
  }
  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/images/bg7_2.jpg")' }}
      >
        {/* Overlay for fading effect */}
        <div className="absolute inset-0 opacity-20"></div>

        {/* Login Modal */}
        <div className="p-16 relative border-2 border-gray-500 text-center justify-center lg:w-full max-w-lg shadow-black shadow-lg rounded-lg">
          <p className="flex text-center justify-center lg:text-4xl md:text-3xl text-xl font-serif font-bold mb-10">
            Login Your Account
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                required
                className="border rounded p-3 w-full bg-slate-50 hover:bg-slate-100 shadow-gray-500 shadow-md"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded p-3 w-full bg-slate-50 hover:bg-slate-100 shadow-gray-500 shadow-md"
              />
            </div>
            <div className="grid grid-cols-2 space-x-3">
              <button
                type="submit"
                className="bg-teal-300 font-semibold text-black py-2 rounded hover:bg-yellow-200 hover:text-black"
              >
                Login
              </button>
              <button
                onClick={() => route("/forgot-password")}
                type="button"
                className="bg-teal-300 font-semibold text-black rounded hover:bg-yellow-200 hover:text-black"
              >
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
