import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import { Star, ShoppingCart, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>('overview');

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    { id: 'overview', title: 'Overview', content: product.description },
    { 
      id: 'specifications', 
      title: 'Specifications', 
      content: (
        <div className="space-y-4">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-700">{key}</span>
              <span className="text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'faqs',
      title: 'FAQs',
      content: (
        <div className="space-y-6">
          {product.faqs.map((faq, index) => (
            <div key={index}>
              <h4 className="font-semibold text-black mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'whats-in-box',
      title: "What's in the Box",
      content: (
        <ul className="space-y-2">
          {product.whatsInBox.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex space-x-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-black' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-black font-semibold">{product.rating}</span>
                <span className="text-gray-600">({product.reviewCount} reviews)</span>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl font-bold text-black">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.availability === 'in-stock'
                    ? 'bg-green-100 text-green-800'
                    : product.availability === 'out-of-stock'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {product.availability === 'in-stock' && 'In Stock'}
                  {product.availability === 'out-of-stock' && 'Out of Stock'}
                  {product.availability === 'pre-order' && 'Pre-Order'}
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="secondary" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <Button variant="secondary" size="lg" className="w-full">
                Buy Now - Fast Checkout
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Collapsible Sections */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-black">{section.title}</h3>
                  {openSection === section.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6 text-gray-700">
                        {typeof section.content === 'string' ? (
                          <p>{section.content}</p>
                        ) : (
                          section.content
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;