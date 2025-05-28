
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'The Future of BIM Technology in Construction',
    excerpt: 'Explore how Building Information Modeling is revolutionizing the construction industry with advanced 3D modeling and data integration.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    date: 'May 15, 2025',
    category: 'Technology',
    author: 'John Smith'
  },
  {
    id: '2',
    title: 'Sustainable Design Practices for Modern Buildings',
    excerpt: 'Learn about the latest sustainable design principles and how they are being implemented in modern construction projects.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    date: 'May 10, 2025',
    category: 'Design',
    author: 'Emily Johnson'
  },
  {
    id: '3',
    title: 'Cost Estimation Challenges in Post-Pandemic Construction',
    excerpt: 'Understanding the new challenges in construction cost estimation due to supply chain disruptions and labor shortages.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    date: 'May 5, 2025',
    category: 'Estimating',
    author: 'Michael Brown'
  },
  {
    id: '4',
    title: 'Digital Twins: Creating Virtual Replicas of Construction Projects',
    excerpt: 'How digital twin technology is enabling better decision-making and maintenance throughout the building lifecycle.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    date: 'April 28, 2025',
    category: 'Technology',
    author: 'Sarah Davis'
  },
  {
    id: '5',
    title: 'Drone Surveys: Enhancing Site Monitoring and Inspection',
    excerpt: 'The evolving use of drone technology for construction site surveys, progress monitoring, and quality control.',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
    date: 'April 21, 2025',
    category: 'Construction',
    author: 'David Wilson'
  },
  {
    id: '6',
    title: 'The Integration of AI in Modern Construction Management',
    excerpt: 'How artificial intelligence is transforming scheduling, resource allocation, and risk assessment in construction projects.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    date: 'April 15, 2025',
    category: 'Technology',
    author: 'Jennifer Thompson'
  }
];

// List of unique categories from blog posts
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = !activeCategory || post.category === activeCategory;
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stay updated with the latest trends, techniques, and insights in design, estimating, and construction management.
          </p>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Main Blog Listing */}
            <div className="lg:w-2/3 lg:pr-8">
              {/* Filter Bar - Mobile View */}
              <div className="mb-8 lg:hidden">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      !activeCategory ? 'bg-brand-navy text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        activeCategory === category ? 'bg-brand-navy text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Blog Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
                    <div key={post.id} className="blog-card">
                      <Link to={`/blog/${post.id}`}>
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="blog-card-image"
                        />
                      </Link>
                      <div className="blog-card-content">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-2">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <Link 
                            to={`/blog/${post.id}`}
                            className="text-brand-navy font-medium hover:text-brand-gold transition-colors"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No posts found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setActiveCategory(null);
                      setSearchTerm('');
                    }}
                    className="mt-4 text-brand-navy hover:text-brand-gold"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Search */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-brand-navy mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    />
                    <svg 
                      className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-brand-navy mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setActiveCategory(null)}
                        className={`w-full text-left px-2 py-1 rounded ${
                          !activeCategory ? 'bg-brand-light text-brand-navy font-medium' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        All Categories
                      </button>
                    </li>
                    {categories.map(category => (
                      <li key={category}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`w-full text-left px-2 py-1 rounded ${
                            activeCategory === category ? 'bg-brand-light text-brand-navy font-medium' : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <div key={post.id} className="flex items-start">
                        <Link to={`/blog/${post.id}`} className="flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </Link>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium">
                            <Link to={`/blog/${post.id}`} className="text-brand-navy hover:text-brand-gold">
                              {post.title}
                            </Link>
                          </h4>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
