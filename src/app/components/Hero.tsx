"use client";

import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-fade"; // Import fade effect styles
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const slides = [
    { id: 1, image: "/hero1.jpg", text: "Welcome to the world of Adventure" },
    { id: 2, image: "/hero3.avif", text: "Discover New Horizons" },
    { id: 3, image: "/hero4.avif", text: "Experience the Beauty of Nature" },
    { id: 4, image: "/hero5.jpg", text: "Travel Beyond Limits" },
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
        fadeEffect={{ crossFade: true }} // Add this
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
              }}
            >
              <div className="p-4 h-full flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-black/40">
                <h1 className="md:text-8xl sm:text-6xl text-4xl font-serif font-bold text-center text-white animate__animated animate__fadeIn">
                  {slide.text.split(" ").map((word, index) =>
                    word === "Adventure" || word === "Travel" ? (
                      <span key={index} className="text-orange-600">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h1>
                <button
                  className="bg-orange-500 text-white p-2 rounded mt-4"
                  onClick={() => router.push("/signup")}
                >
                  Get Start Your Journey
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
