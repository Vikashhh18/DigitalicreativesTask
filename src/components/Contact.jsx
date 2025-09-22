import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in <span className="text-rose-600">Touch</span>
          </h2>
          <p className="text-gray-600 mt-3">
            We’d love to hear from you! Whether it’s an inquiry, feedback, or collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-rose-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Visit Us</h3>
                <p className="text-gray-600">
                  H.N Sarees, MG Road, New Delhi, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-rose-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-rose-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">support@hnsarees.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-6 rounded-2xl shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-md transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
