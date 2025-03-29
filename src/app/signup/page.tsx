'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

const SignUp = () => {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmPassword]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');

    const router = useRouter();

    interface RouteFunction {
        (name: string): void;
    }

    const route: RouteFunction = (name) => {
        router.push(name);
    }

    return (
        <div>
            <div id="signup">
            <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: 'url("/images/bg7_2.jpg")' }}
          >
            <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: 'url("/images/bg8.jpg")' }}>
            <div className="p-10 text-center lg:w-full lg:max-w-xl max-w-sm shadow-black rounded-lg shadow-lg bg-transparent">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-serif font-bold mb-8">
                Register a New Account
              </h2>
              <form className="space-y-6">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" required className="input-field" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required className="input-field" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" required className="input-field" />
                <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Your Password" required className="input-field" />
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={10} placeholder="Enter Your Phone Number" pattern="^[0-9]{10}$" required className="input-field" />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Your Address" required className="input-field" />
                <button type="submit" onClick={()=>route("/login")} className="bg-blue-950 font-semibold text-white p-3 px-5 rounded hover:bg-yellow-200 hover:text-black">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
            </div>
          </div>
        </div>
      );
}

export default SignUp