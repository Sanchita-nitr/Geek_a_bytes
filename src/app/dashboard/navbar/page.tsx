'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const router = useRouter();

  interface RouteFunction {
    (name: string): void;
  }

  const route: RouteFunction = (name) => {
    router.push(name);
  }
  return (
    <div>
        navbar

        <ul>
            <button onClick={() => route("/dashboard/hero")}><li>Home</li></button>
            <button onClick={() => route("/dashboard/destinations")}><li>Destinations</li></button>
            <button onClick={() => route("/dashboard/blog")}><li>Blog</li></button>
            <button onClick={() => route("/dashboard/services")}><li>Services</li></button>
            <button onClick={() => route("/dashboard/onlinebooking")}><li>Online Booking</li></button>
            <button onClick={() => route("/dashboard/iternary")}><li>Itinerary</li></button>
        </ul>
    </div>
  )
}

export default Navbar