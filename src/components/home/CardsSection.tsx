import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Clock, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
// IMPORTANT: File name is BlogPosts.ts (plural, with caps), import with exact casing
import { blogPosts, type BlogPost } from '../../data/BlogPost';
import Button from '../ui/Button';

// Local type for the product shape used in this component.
// Adjust if your products have different fields.
type ProductLike = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  images: string[];
};

const CardsSection: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: ProductLike) => {
    // Cast to any to avoid mismatches if CartContext expects a different Product type
    addToCart(product as any);
    navigate('/cart');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // cubic-bezier similar to easeOut
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Product Cards */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-6xl font-bold text-black mb-6" variants={cardVariants}>
              Smart Devices
              <br />
              <span className="text-amber-800/70">Reimagined</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={cardVariants}>
              Experience the future of home automation with our premium collection of intelligent devices
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product: ProductLike) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm border border-amber-100/50 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/90">
                  <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-amber-50/30">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-amber-800 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-black">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="text-yellow-500 mr-1">★</span>
                      {product.rating}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-black text-white hover:bg-amber-800 transition-all duration-300 group-hover:shadow-lg"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Link to={`/product/${product.slug}`}>
                      <Button variant="secondary" className="w-full border-amber-200 hover:bg-amber-50 transition-all duration-300">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation Hub Section */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-6xl font-bold text-black mb-6" variants={cardVariants}>
              Innovation Hub
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-4xl mx-auto" variants={cardVariants}>
              Stay ahead with the latest insights in smart home technology and innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post: BlogPost) => (
              <motion.div key={post.id} variants={cardVariants} whileHover={{ y: -8 }} className="group">
                <div className="bg-white/80 backdrop-blur-sm border border-amber-100/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/90">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-50 to-amber-50/30">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-amber-800 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">{post.excerpt}</p>

                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="group-hover:bg-amber-50 transition-all duration-300">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mixed Layout Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-6xl font-bold text-black mb-6" variants={cardVariants}>
              Featured
              <br />
              <span className="text-amber-800/70">Collection</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Featured Products */}
            {products.slice(4, 6).map((product: ProductLike) => (
              <motion.div key={product.id} variants={cardVariants} whileHover={{ y: -8, scale: 1.02 }} className="group lg:col-span-2">
                <div className="bg-white/80 backdrop-blur-sm border border-amber-100/50 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/90">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-amber-50/30">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-amber-800 transition-colors">{product.name}</h3>

                      <p className="text-gray-600 mb-4">{product.description}</p>

                      <div className="flex items-center space-x-2 mb-6">
                        <span className="text-3xl font-bold text-black">${product.price}</span>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-yellow-500 mr-1">★</span>
                          {product.rating}
                        </div>
                      </div>

                      <Button onClick={() => handleAddToCart(product)} className="w-full bg-black text-white hover:bg-amber-800 transition-all duration-300">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Featured Blog Posts */}
            {blogPosts.slice(3, 5).map((post: BlogPost) => (
              <motion.div key={post.id} variants={cardVariants} whileHover={{ y: -8 }} className="group">
                <div className="bg-white/80 backdrop-blur-sm border border-amber-100/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/90 h-full">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-50 to-amber-50/30">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                      {post.category === 'Innovation' && <Lightbulb className="h-4 w-4 text-amber-600" />}
                      {post.category === 'Trends' && <TrendingUp className="h-4 w-4 text-amber-600" />}
                      {post.category === 'Stories' && <Users className="h-4 w-4 text-amber-600" />}
                    </div>

                    <h3 className="text-lg font-bold text-black mb-3 group-hover:text-amber-800 transition-colors line-clamp-2">{post.title}</h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group-hover:bg-amber-50 transition-all duration-300">
                        Explore Story
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CardsSection;