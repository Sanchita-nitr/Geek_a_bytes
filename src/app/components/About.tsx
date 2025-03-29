"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AboutUs = () => {
  const router = useRouter();

  return (
    <div id="about" className="py-12 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-orange-600">About Om Tours</h1>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-bold text-orange-800">Om Tours</span>, where we redefine travel planning with cutting-edge AI technology.
            Our goal is to make your journeys <span className="font-bold">seamless, personalized, and hassle-free.</span>
          </p>
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg">
            We strive to empower travelers by offering <span className="font-bold">real-time itinerary generation, dynamic trip adjustments, and curated recommendations</span>, ensuring every trip is unique and unforgettable.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/travel-illustration.png"
            alt="Travel with Om Tours"
            width={500}  // Adjust as per image size
            height={350} // Adjust as per image size
            className="w-3/4 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Feature Table */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "AI-Powered Itineraries", desc: "Tailored travel plans based on your interests, budget, and time." },
            { title: "Real-Time Updates", desc: "Dynamically adjusts your itinerary based on live conditions and preferences." },
            { title: "User-Friendly Experience", desc: "A seamless and intuitive interface designed for ease of use." },
            { title: "Personalized Recommendations", desc: "Find the best attractions, hotels, and restaurants for your trip." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-orange-600">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <motion.button
          className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push("/signup")}
        >
          Start Your Journey
        </motion.button>
      </div>
    </div>
  );
};

export default AboutUs;
