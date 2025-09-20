import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, type BlogPost } from '../data/BlogPost';

const BlogListPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-white to-amber-50/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">Innovation Hub</h1>
          <p className="text-gray-600 mt-3">Insights, trends, and stories from the Cronlux team</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post: BlogPost) => (
            <article key={post.id} className="bg-white/80 border border-amber-100/50 rounded-2xl overflow-hidden shadow">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-video overflow-hidden bg-amber-50">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800">{post.category}</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-black mb-2">{post.title}</h2>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;