"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Historical Places",
    destinations: [
      {
        name: "Taj Mahal",
        image: "/taj-mahal.webp",
        subtitle: "Symbol of Love",
        description:
          "A UNESCO World Heritage site, the Taj Mahal in Agra is a masterpiece of Mughal architecture and a symbol of eternal love.",
      },
      {
        name: "Jaipur",
        image: "/jaipur.jpg",
        subtitle: "The Pink City",
        description:
          "Jaipur, the capital of Rajasthan, is known for its royal palaces, vibrant markets, and historical forts like Amber Fort and Hawa Mahal.",
      },
      {
        name: "Hampi",
        image: "/hampi.jpg",
        subtitle: "Ruins of Vijayanagara",
        description:
          "Hampi is a UNESCO-listed heritage site featuring ancient ruins of the Vijayanagara Empire, offering a glimpse into India's rich history.",
      },
      {
        name: "Mysore Palace",
        image: "/mysore.webp",
        subtitle: "Royal Heritage",
        description:
          "The Mysore Palace is a stunning example of Indo-Saracenic architecture and serves as a grand reminder of India's royal past.",
      },
      {
        name: "Red Fort",
        image: "/red-fort.jpg",
        subtitle: "Mughal Marvel",
        description:
          "Located in Delhi, the Red Fort is a historical monument that once served as the main residence of Mughal emperors.",
      },
      {
        name: "Qutub Minar",
        image: "/qutub-minar.jpg",
        subtitle: "Tallest Brick Minaret",
        description:
          "A UNESCO World Heritage site in Delhi, Qutub Minar is an architectural marvel from the Mughal era.",
      },
      {
        name: "Konark Sun Temple",
        image: "/konark.webp",
        subtitle: "Architectural Wonder",
        description:
          "Located in Odisha, this temple is known for its intricate carvings and chariot-like structure dedicated to the Sun God.",
      },
      {
        name: "Fatehpur Sikri",
        image: "/fatehpur-sikri.jpg",
        subtitle: "Mughal Splendor",
        description:
          "A historical town near Agra, Fatehpur Sikri was once the capital of the Mughal Empire and showcases stunning Mughal architecture.",
      },
      {
        name: "Ajanta & Ellora Caves",
        image: "/ajanta-ellora.jpg",
        subtitle: "Ancient Rock-cut Caves",
        description:
          "These UNESCO-listed caves in Maharashtra feature exquisite rock-cut sculptures and paintings from ancient India.",
      },
      {
        name: "Puri Temple",
        image: "/puri-temple.jpg",
        subtitle: "Spiritual Landmark",
        description:
          "A major Hindu pilgrimage site, Puri's Jagannath Temple is famous for its annual Rath Yatra festival.",
      },
    ],
  },
  {
    title: "Adventure Destinations",
    destinations: [
      {
        name: "Leh-Ladakh",
        image: "/leh-ladakh.jpg",
        subtitle: "Biker's Paradise",
        description:
          "A dream destination for bikers, Leh-Ladakh offers breathtaking landscapes, high-altitude passes, and an adventurous road trip experience.",
      },
      {
        name: "Rishikesh",
        image: "/rishikesh.webp",
        subtitle: "Rafting Hub",
        description:
          "Known as the adventure capital of India, Rishikesh is famous for river rafting, bungee jumping, and spiritual retreats.",
      },
      {
        name: "Spiti Valley",
        image: "/spiti.jpg",
        subtitle: "Rugged Himalayas",
        description:
          "A cold desert mountain valley in Himachal Pradesh, Spiti Valley offers stunning landscapes, ancient monasteries, and high-altitude adventure.",
      },
      {
        name: "Andaman Islands",
        image: "/andaman.webp",
        subtitle: "Scuba Diving Haven",
        description:
          "A tropical paradise, the Andaman Islands are known for crystal-clear waters, white sandy beaches, and world-class scuba diving spots.",
      },
      {
        name: "Auli",
        image: "/auli.jpg",
        subtitle: "Skiing Destination",
        description:
          "Auli is a top skiing destination in India, offering breathtaking views of snow-capped peaks and thrilling winter sports.",
      },
      {
        name: "Meghalaya Caves",
        image: "/meghalaya-caves.jpg",
        subtitle: "Caving Adventure",
        description:
          "Explore the deep limestone caves of Meghalaya, a thrilling adventure for spelunkers and nature lovers.",
      },
      {
        name: "Manali",
        image: "/manali.jpg",
        subtitle: "Winter Wonderland",
        description:
          "A hub for adventure lovers, Manali offers skiing, trekking, paragliding, and scenic mountain landscapes.",
      },
      {
        name: "Tawang",
        image: "/tawang.jpg",
        subtitle: "Buddhist Serenity",
        description:
          "Located in Arunachal Pradesh, Tawang is known for its scenic monasteries, high-altitude passes, and breathtaking landscapes.",
      },
      {
        name: "Sand Dunes of Jaisalmer",
        image: "/sand-dunes.webp",
        subtitle: "Desert Safari",
        description:
          "Experience camel rides and desert camping in the golden sand dunes of Jaisalmer, Rajasthan.",
      },
    ],
  },
  {
    title: "Family Destinations",
    destinations: [
      {
        name: "Kerala Backwaters",
        image: "/Kerala Backwaters.png",
        subtitle: "Houseboat Retreat",
        description:
          "Enjoy a peaceful stay on a houseboat in the Kerala backwaters, surrounded by lush greenery and serene water channels.",
      },
      {
        name: "Munnar",
        image: "/munnar.jpg",
        subtitle: "Tea Gardens",
        description:
          "A picturesque hill station in Kerala, Munnar is famous for its sprawling tea plantations, waterfalls, and pleasant weather.",
      },
      {
        name: "Shimla",
        image: "/shimla.webp",
        subtitle: "Queen of Hills",
        description:
          "The capital of Himachal Pradesh, Shimla is known for its colonial architecture, scenic landscapes, and vibrant mall road.",
      },
      {
        name: "Coorg",
        image: "/coorg.webp",
        subtitle: "Coffee Paradise",
        description:
          "Coorg, also known as Kodagu, is a lush green hill station famous for coffee plantations, waterfalls, and rich culture.",
      },
      {
        name: "Darjeeling",
        image: "/darjeeling.jpg",
        subtitle: "Toy Train Views",
        description:
          "A charming hill town, Darjeeling is known for its world-famous tea, scenic beauty, and the UNESCO-listed Toy Train.",
      },
      {
        name: "Ooty",
        image: "/ooty.jpg",
        subtitle: "Nilgiri Hills",
        description:
          "A famous hill station in Tamil Nadu known for its tea estates, gardens, and pleasant climate.",
      },
      {
        name: "Mount Abu",
        image: "/mount-abu.jpg",
        subtitle: "Rajasthan's Hill Retreat",
        description:
          "The only hill station in Rajasthan, Mount Abu is known for its cool climate and Dilwara Temples.",
      },
      {
        name: "Mahabaleshwar",
        image: "/mahabaleshwar.jpg",
        subtitle: "Strawberry Fields",
        description:
          "A scenic hill station in Maharashtra, known for its beautiful viewpoints, waterfalls, and fresh strawberries.",
      },
      {
        name: "Sundarbans National Park",
        image: "/sundarbans.jpg",
        subtitle: "Mangrove Wonderland",
        description:
          "A UNESCO World Heritage site, famous for its unique mangrove ecosystem and the Royal Bengal Tiger.",
      },
      {
        name: "Kanyakumari",
        image: "/kanyakumari.jpg",
        subtitle: "Triveni Sangam",
        description:
          "The southernmost tip of India, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet, offering stunning sunrises and sunsets.",
      },
    ],
  },
  {
    title: "Friends' Getaway",
    destinations: [
      {
        name: "Goa",
        image: "/goa.avif",
        subtitle: "Party Capital",
        description:
          "A vibrant beach destination, Goa is known for its nightlife, water sports, and beautiful beaches.",
      },
      {
        name: "Kasol",
        image: "/kasol.jpg",
        subtitle: "Backpacker’s Haven",
        description:
          "A paradise for backpackers, Kasol offers breathtaking views, hippie vibes, and adventure-filled treks.",
      },
      {
        name: "Pondicherry",
        image: "/pondicherry.jpg",
        subtitle: "French Charm",
        description:
          "A former French colony, Pondicherry is known for its charming streets, beaches, and delicious food.",
      },
      {
        name: "Rann of Kutch",
        image: "/Rann of Kutch.jpg",
        subtitle: "White Desert",
        description:
          "The Rann of Kutch is a surreal white salt desert that comes alive during the Rann Utsav festival.",
      },
      {
        name: "Gokarna",
        image: "/gokarna.jpg",
        subtitle: "Beach Escape",
        description:
          "A quieter alternative to Goa, Gokarna is a perfect getaway with serene beaches and breathtaking landscapes.",
      },
      {
        name: "McLeod Ganj",
        image: "/mcleodganj.jpg",
        subtitle: "Little Lhasa",
        description:
          "A vibrant hill town in Himachal Pradesh, known for its Tibetan culture, monasteries, and trekking trails.",
      },
      {
        name: "Shillong",
        image: "/shillong.jpg",
        subtitle: "Scotland of the East",
        description:
          "A picturesque hill station in Meghalaya, known for its waterfalls, lively cafes, and rock music culture.",
      },
      {
        name: "Lonavala",
        image: "/lonavala.webp",
        subtitle: "Misty Retreat",
        description:
          "A popular getaway near Mumbai and Pune, famous for its lush greenery, waterfalls, and adventure activities.",
      },
      {
        name: "Alleppey",
        image: "/alleppey.jpg",
        subtitle: "Venice of the East",
        description:
          "Famous for its backwaters, houseboat cruises, and beautiful lagoons, making it a great place for relaxation.",
      },
    ],
  },
];

const DestinationSlider = () => {
  return (
    <div id="destinations"> <div className="w-full mx-auto gap-4 p-4">
    {categories.map((category, index) => (
      <div key={index} className="mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          {category.title}
        </h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {category.destinations.map((destination, idx) => (
            <motion.div
              key={idx}
              className="min-w-[250px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white relative p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">
                {destination.name}
              </h3>
              <p className="text-sm font-light">{destination.subtitle}</p>
              <p className="text-xs mt-2">{destination.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ))}
  </div></div>
   
  );
};

export default DestinationSlider;
