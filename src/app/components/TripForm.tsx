"use client"
import { useState } from "react";

export default function TripForm() {
  const [destination, setDestination] = useState("");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Plan Your Trip</h2>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full p-2 border rounded-md"
        placeholder="Enter Destination"
      />
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
        Generate Itinerary
      </button>
    </div>
  );
}
