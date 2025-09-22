import { useParams, Link } from "react-router-dom";
import image1 from '../Image/shopping.webp';
import image2 from '../Image/Image2.webp';
import image3 from '../Image/Image3.webp';
import image4 from '../Image/Image4.webp';
import image5 from '../Image/Image5.webp';
import image6 from '../Image/Image6.webp';

const productData = [
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

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <Link to="/" className="text-rose-600 hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8">
       <div className="overflow-hidden bg-gray-50 p-4">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-80 md:h-96 object-contain group-hover:scale-105 transition duration-500"
  />
</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-rose-600 font-semibold text-xl mb-6">{product.price}</p>
        <Link
          to="/"
          className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full transition shadow-md"
        >
          Back to Collection
        </Link>
      </div>
    </div>
  );
}
