const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    feedback:
      "Absolutely loved my Banarasi saree from H.N Sarees! The quality is excellent and the design is timeless. Got so many compliments!",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Neha Verma",
    feedback:
      "H.N Sarees never disappoints. The Kanjivaram I purchased was stunning and perfect for my sister’s wedding. Highly recommended!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Aditi Mehta",
    feedback:
      "The Chanderi cotton saree is so light and comfortable, yet elegant. Definitely going to order more from here.",
    image:
      "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our <span className="text-rose-600">Customers Say</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Hear from the women who draped elegance with H.N Sarees
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">“{t.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
