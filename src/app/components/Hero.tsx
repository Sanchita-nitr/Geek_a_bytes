const Hero= () => {
    return (
      <div className="">
        <div
          className="mt-20"
          style={{
            backgroundImage: "url('/hero1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            opacity: 0.6,
          }}
        >
        </div>
        <div className="p-4 h-full flex flex-col justify-center items-center absolute top-0 left-0 w-full">
          <h1 className="text-6xl font-serif font-bold text-center text-white">
            Welcome to OM Tours
          </h1>
          <h1 className="text-2xl text-center font-semibold text-white mt-5">
            Your tour guide for the best places to visit in Oman
          </h1>
        </div>
      </div>
    );
  };
  
  export default Hero;
  