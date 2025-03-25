"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Packages = () => {
  const packages = [
    {
      name: "Romantic Getaway",
      price: "₹82,000",
      details: "Experience luxury and romance at exotic locations.",
    },
    {
      name: "Family Adventure",
      price: "₹1,25,000",
      details: "A perfect vacation with activities for all ages.",
    },
    {
      name: "Solo Explorer",
      price: "₹65,000",
      details: "Find yourself with our exclusive solo travel plans.",
    },
    {
      name: "Cultural Odyssey",
      price: "₹90,000",
      details: "Immerse yourself in history and tradition across destinations.",
    },
    {
      name: "Luxury Retreat",
      price: "₹2,00,000",
      details: "Indulge in premium stays, gourmet dining, and private tours.",
    },
  ];

  const router = useRouter();

  return (
    <section id="packages" className="py-12 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-orange-600 text-center mb-6">
          Our Exclusive Travel Packages
        </h1>
        <p className="text-lg text-center mb-10">
          Choose from a variety of curated experiences tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-bold text-orange-700 mb-2">
                {pkg.name}
              </h2>
              <p className="text-lg font-semibold text-gray-900">{pkg.price}</p>
              <p className="text-gray-600 mt-2">{pkg.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <motion.button
          aria-label="Book Your Dream Trip"
          className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push("/login")}
        >
          Book Your Dream Trip
        </motion.button>
      </div>
    </section>
  );
};

export default Packages;
