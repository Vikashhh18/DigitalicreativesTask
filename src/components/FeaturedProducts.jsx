
import { useNavigate } from 'react-router-dom';
import image1 from '../Image/shopping.webp';
import image2 from '../Image/Image2.webp';
import image3 from '../Image/Image3.webp';
import image4 from '../Image/Image4.webp';
import image5 from '../Image/Image5.webp';
import image6 from '../Image/Image6.webp';

const products = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: "₹4,999",
    image: image1,
    description: "A luxurious Banarasi silk saree with intricate zari work, perfect for weddings and special occasions.",
  },
  {
    id: 2,
    name: "Kanjivaram Saree",
    price: "₹6,499",
    image: image2,
    description: "Traditional Kanjivaram saree known for its rich texture and vibrant colors, ideal for festive events.",
  },
  {
    id: 3,
    name: "Chanderi Cotton Saree",
    price: "₹2,999",
    image: image3,
    description: "Lightweight Chanderi cotton saree, comfortable for daily wear with elegant patterns.",
  },
  {
    id: 4,
    name: "Designer Party Saree",
    price: "₹5,499",
    image: image4,
    description: "Stylish designer saree with modern embellishments, perfect for parties and celebrations.",
  },
  {
    id: 5,
    name: "Chanderi Cotton Saree",
    price: "₹2,999",
    image: image5,
    description: "Classic Chanderi cotton saree with a touch of tradition and grace.",
  },
  {
    id: 6,
    name: "Designer Party Saree",
    price: "₹5,499",
    image: image6,
    description: "Elegant party wear saree with unique design elements for a standout look.",
  },
];

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const handleShowNow = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <section id="collection" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured <span className="text-rose-600">Collection</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Explore our finest selection of traditional & designer sarees
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              <div className="overflow-hidden">
               <img
  src={product.image}
  alt={product.name}
  className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition duration-500"
/>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-rose-600 font-medium mt-2">{product.price}</p>
                <button
                  className="mt-4 cursor-pointer bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-full transition shadow-md"
                  onClick={() => handleShowNow(product)}
                >
                  Show Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
