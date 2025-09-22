import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Decorative line */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-rose-400 rounded-full opacity-80"></div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-800">
          <span className="block text-gray-700">Wrap Yourself in</span>
          <span className="block mt-2 text-rose-600">Timeless Elegance</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-600 font-light">
          Experience the exquisite charm of{" "}
          <span className="text-rose-600 font-medium">H.N Sarees</span>, 
          where every saree is a masterpiece that blends tradition, artistry, and modern elegance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <a
            href="#collection"
            className="group bg-rose-600 hover:bg-rose-700 text-white font-medium px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center"
          >
            <span>Shop The Collection</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="group border-2 border-rose-400 hover:border-rose-600 text-rose-600 font-medium px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <span>Discover Our Story</span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
