"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

interface ItineraryItem {
  time: string;
  activity: string;
  location: string;
}

export default function ItineraryDisplay() {
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await axios.get("/api/itinerary"); // Replace with your actual API endpoint
        setItinerary(response.data);
      } catch (error) {
        console.error("Error fetching itinerary:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-6">
        Your Real-Time Itinerary
      </h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading itinerary...</p>
      ) : (
        <ul className="space-y-6 max-w-4xl mx-auto">
          {itinerary.map((item, index) => (
            <li
              key={index}
              className="p-5 bg-white shadow-lg rounded-lg flex items-center gap-4"
            >
              <FaClock className="text-orange-500 text-xl" />
              <div>
                <p className="text-lg font-semibold">{item.activity}</p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-400" /> {item.location}
                </p>
                <p className="text-gray-700 font-medium">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}