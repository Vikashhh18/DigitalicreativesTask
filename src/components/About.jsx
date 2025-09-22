import image4 from '../Image/Image4.webp'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <img
            src={image4}
            alt="H.N Sarees"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-rose-600">H.N Sarees</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold">H.N Sarees</span>, we believe a saree is not just
            attire, but a celebration of tradition, culture, and timeless elegance. 
            Our collection is crafted with fine fabrics, intricate designs, and 
            unmatched craftsmanship that honor the heritage of Indian textiles.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Each drape tells a story — of artistry, passion, and the beauty of 
            womanhood. Whether you’re celebrating a wedding, a festival, or 
            simply embracing elegance, H.N Sarees is here to make every 
            occasion memorable.
          </p>

          <a
            href="#collection"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </section>
  );
}
