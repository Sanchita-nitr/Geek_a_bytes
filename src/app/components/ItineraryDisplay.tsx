const itinerary = [
    { time: "9:00 AM", activity: "Visit Eiffel Tower" },
    { time: "12:00 PM", activity: "Lunch at a local cafe" },
    { time: "3:00 PM", activity: "Explore Louvre Museum" },
  ];
  
  export default function ItineraryDisplay() {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
        <ul className="space-y-4">
          {itinerary.map((item, index) => (
            <li key={index} className="p-4 bg-white shadow-md rounded-lg">
              <strong>{item.time}</strong> - {item.activity}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  