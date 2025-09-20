import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { categories } from '../data/categories';
import { products } from '../data/products';
import * as Icons from 'lucide-react';

const ExplorePage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Explore Our
            <br />
            <span className="text-gray-600">Smart Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how CRONLUX devices work together to create an intelligent, 
            seamless home automation experience.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;
            const categoryProducts = products.filter(product => 
              category.products.includes(product.slug)
            );

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {categoryProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.slug}`}
                        className="block group"
                      >
                        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-black/5 transition-colors">
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="font-medium text-black group-hover:text-gray-700 transition-colors">
                                {product.name}
                              </h4>
                              <p className="text-sm text-gray-500">${product.price}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="text-yellow-500 mr-1">★</span>
                            {product.rating}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* All Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/product/${product.slug}`}>
                  <Card className="h-full">
                    <div className="p-6">
                      <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-black">
                          ${product.price}
                        </span>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-yellow-500 mr-1">★</span>
                          {product.rating}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExplorePage;