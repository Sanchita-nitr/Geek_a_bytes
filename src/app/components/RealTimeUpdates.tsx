const weatherCondition = "Rainy";

export default function RealTimeUpdates() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Live Updates</h2>
      <p className="mt-2">
        Today's weather is <strong>{weatherCondition}</strong>. We suggest indoor activities.
      </p>
    </div>
  );
}
