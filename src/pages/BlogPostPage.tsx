import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/BlogPost';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-amber-700 hover:underline flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/blog" className="text-amber-700 hover:underline flex items-center gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <header className="mb-6">
          <div className="text-sm text-gray-600 mb-2">
            <span className="px-2 py-1 rounded bg-amber-100 text-amber-800">{post.category}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-black">{post.title}</h1>
          <p className="text-gray-600 mt-3">{post.excerpt}</p>
        </header>

        <div className="aspect-video rounded-xl overflow-hidden bg-amber-50 mb-8">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-amber max-w-none">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;