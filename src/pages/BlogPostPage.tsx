
import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';

// Mock blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'The Future of BIM Technology in Construction',
    excerpt: 'Explore how Building Information Modeling is revolutionizing the construction industry with advanced 3D modeling and data integration.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    date: 'May 15, 2025',
    category: 'Technology',
    author: 'John Smith',
    content: `
      <p>Building Information Modeling (BIM) has transformed the way construction projects are designed, planned, and executed. As we look to the future, BIM technology continues to evolve at a rapid pace, offering even greater potential for improving efficiency, reducing costs, and enhancing collaboration across the construction industry.</p>
      
      <h3>The Evolution of BIM</h3>
      <p>When BIM was first introduced, it primarily served as a 3D visualization tool. Today, BIM has evolved into a comprehensive platform that incorporates 4D (time), 5D (cost), 6D (sustainability), and even 7D (facility management) dimensions. This evolution has enabled construction professionals to gain deeper insights into projects at every stage of the building lifecycle.</p>
      
      <p>Modern BIM platforms now integrate with a wide range of other technologies, including:</p>
      <ul>
        <li>Artificial intelligence for predictive analytics</li>
        <li>Internet of Things (IoT) devices for real-time monitoring</li>
        <li>Virtual and augmented reality for immersive visualization</li>
        <li>Cloud computing for seamless collaboration</li>
      </ul>
      
      <h3>Benefits of Advanced BIM Implementation</h3>
      <p>Organizations that fully embrace BIM technology can expect numerous benefits, including:</p>
      
      <h4>Improved Coordination</h4>
      <p>BIM enables better coordination between different disciplines involved in a construction project. By creating a central, data-rich model, architects, engineers, contractors, and other stakeholders can work together more effectively, reducing conflicts and minimizing rework.</p>
      
      <h4>Enhanced Visualization</h4>
      <p>Advanced rendering capabilities allow stakeholders to visualize the final product with incredible detail, making it easier to communicate design intent and identify potential issues before construction begins.</p>
      
      <h4>Optimized Resource Allocation</h4>
      <p>By simulating construction sequences and analyzing resource requirements, BIM helps optimize the allocation of labor, materials, and equipment, leading to more efficient project execution and cost savings.</p>
      
      <h3>The Future of BIM</h3>
      <p>Looking ahead, several trends are shaping the future of BIM technology:</p>
      
      <h4>Generative Design</h4>
      <p>Generative design uses algorithms to explore all possible design solutions based on specified constraints and objectives. This approach allows designers to quickly evaluate numerous design options and select the most optimal solution.</p>
      
      <h4>Digital Twins</h4>
      <p>Digital twins are virtual replicas of physical buildings that update in real-time using data from sensors and other sources. This technology enables better facility management and predictive maintenance, extending the useful life of buildings and reducing operational costs.</p>
      
      <h4>AI-Enhanced BIM</h4>
      <p>Artificial intelligence is increasingly being integrated into BIM platforms to automate routine tasks, detect clashes, optimize designs, and predict project outcomes with greater accuracy.</p>
      
      <h3>Conclusion</h3>
      <p>As BIM technology continues to advance, construction professionals who embrace these innovations will be well-positioned to deliver projects more efficiently, with better quality, and at lower costs. The future of BIM is not just about better 3D models – it's about creating a comprehensive digital ecosystem that supports the entire building lifecycle from conception to demolition.</p>
    `
  },
  {
    id: '2',
    title: 'Sustainable Design Practices for Modern Buildings',
    excerpt: 'Learn about the latest sustainable design principles and how they are being implemented in modern construction projects.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    date: 'May 10, 2025',
    category: 'Design',
    author: 'Emily Johnson',
    content: `
      <p>Sustainable design has evolved from a niche consideration to a fundamental aspect of modern building practices. With growing awareness of climate change and environmental impacts, architects and engineers are increasingly incorporating sustainable principles into their designs from the earliest stages of project development.</p>
      
      <h3>Key Sustainable Design Strategies</h3>
      <p>Today's sustainable buildings employ a wide range of strategies to minimize environmental impact while maximizing occupant comfort and operational efficiency:</p>
      
      <h4>Passive Design</h4>
      <p>Passive design strategies leverage natural forces to maintain comfortable conditions inside buildings with minimal energy consumption. These include:</p>
      <ul>
        <li>Optimizing building orientation to capture natural light and heat</li>
        <li>Strategic window placement for cross-ventilation</li>
        <li>Thermal mass to moderate temperature fluctuations</li>
        <li>Shading devices to prevent overheating</li>
      </ul>
      
      <h4>Energy Efficiency</h4>
      <p>Reducing energy consumption is a cornerstone of sustainable design. Modern buildings incorporate:</p>
      <ul>
        <li>High-performance building envelopes with superior insulation</li>
        <li>Energy-efficient HVAC systems with heat recovery</li>
        <li>LED lighting with smart controls</li>
        <li>Energy monitoring systems to optimize performance</li>
      </ul>
      
      <h4>Renewable Energy Integration</h4>
      <p>Many sustainable buildings now incorporate on-site renewable energy generation:</p>
      <ul>
        <li>Solar photovoltaic panels for electricity generation</li>
        <li>Solar thermal systems for hot water</li>
        <li>Ground-source heat pumps for heating and cooling</li>
        <li>Wind turbines in suitable locations</li>
      </ul>
      
      <h3>Materials and Resources</h3>
      <p>Sustainable material selection focuses on:</p>
      <ul>
        <li>Low-embodied carbon materials that require less energy to produce</li>
        <li>Locally sourced materials to reduce transportation emissions</li>
        <li>Recycled or reclaimed materials to minimize waste</li>
        <li>Non-toxic materials for better indoor air quality</li>
        <li>Durability and longevity to reduce replacement frequency</li>
      </ul>
      
      <h3>Water Conservation</h3>
      <p>Water-efficient design includes:</p>
      <ul>
        <li>Low-flow fixtures and appliances</li>
        <li>Rainwater harvesting systems</li>
        <li>Greywater recycling for irrigation and toilet flushing</li>
        <li>Water-efficient landscaping with native plants</li>
      </ul>
      
      <h3>The Business Case for Sustainability</h3>
      <p>Beyond environmental benefits, sustainable buildings offer compelling economic advantages:</p>
      <ul>
        <li>Lower operating costs through reduced energy and water consumption</li>
        <li>Higher property values and rental rates</li>
        <li>Improved occupant health, comfort, and productivity</li>
        <li>Enhanced corporate image and marketability</li>
        <li>Reduced risk from future energy price volatility and regulations</li>
      </ul>
      
      <h3>Looking Forward</h3>
      <p>The future of sustainable design is moving toward regenerative buildings that not only minimize negative impacts but actively contribute positively to their environments by:</p>
      <ul>
        <li>Generating more energy than they consume</li>
        <li>Capturing and purifying water</li>
        <li>Improving air quality</li>
        <li>Creating habitat for wildlife</li>
        <li>Supporting local ecosystems</li>
      </ul>
      
      <p>By embracing these advanced sustainable design practices, building professionals can create structures that not only reduce environmental harm but actively help heal our planet while providing superior spaces for people to live and work.</p>
    `
  },
  {
    id: '3',
    title: 'Cost Estimation Challenges in Post-Pandemic Construction',
    excerpt: 'Understanding the new challenges in construction cost estimation due to supply chain disruptions and labor shortages.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    date: 'May 5, 2025',
    category: 'Estimating',
    author: 'Michael Brown',
    content: `<p>Construction cost estimation has always been a challenging aspect of project management, requiring a delicate balance of historical data, market knowledge, and predictive analysis. However, the post-pandemic landscape has introduced unprecedented levels of complexity that have made accurate cost estimation more difficult than ever before.</p>

    <h3>Supply Chain Volatility</h3>
    <p>Perhaps the most significant challenge facing estimators today is the continued volatility in the construction supply chain. Materials that once had predictable pricing and availability are now subject to:</p>
    <ul>
      <li>Dramatic price fluctuations, sometimes changing weekly or even daily</li>
      <li>Extended and unpredictable lead times</li>
      <li>Sporadic availability and allocation issues</li>
      <li>Quality inconsistencies due to substitutions and alternatives</li>
    </ul>
    
    <p>Key materials like steel, lumber, concrete, and electronic components have seen some of the most dramatic price increases and availability issues. This volatility makes it extremely difficult to provide estimates that will remain accurate over the life of a project, particularly for projects with longer timelines.</p>
    
    <h3>Labor Market Dynamics</h3>
    <p>The construction industry was already facing labor shortages before the pandemic, but these challenges have intensified:</p>
    <ul>
      <li>Skilled labor shortages across multiple trades</li>
      <li>Rising wages as companies compete for available workers</li>
      <li>Reduced productivity due to health protocols and distancing requirements</li>
      <li>Higher rates of absenteeism and turnover</li>
    </ul>
    
    <p>These labor issues directly impact project timelines and costs, often in ways that are difficult to predict at the estimation stage.</p>
    
    <h3>Risk Allocation and Contractual Changes</h3>
    <p>The increased uncertainty in the construction market has led to significant changes in how risk is allocated between parties:</p>
    <ul>
      <li>Greater use of price escalation clauses</li>
      <li>Shorter validity periods for bids and quotes</li>
      <li>More contingency built into contracts</li>
      <li>Modified force majeure provisions</li>
    </ul>
    
    <p>Estimators must understand these new contractual realities and account for them appropriately in their pricing strategies.</p>
    
    <h3>Technology as a Solution</h3>
    <p>Despite these challenges, new technologies are emerging to help estimators navigate this complex landscape:</p>
    <ul>
      <li>Real-time material price tracking and analytics</li>
      <li>AI-powered predictive modeling for price forecasting</li>
      <li>Digital platforms for managing supplier relationships and quotes</li>
      <li>Advanced risk analysis tools</li>
    </ul>
    
    <p>These tools can provide estimators with more current information and better predictive capabilities, helping to mitigate some of the uncertainty in today's market.</p>
    
    <h3>Best Practices for Modern Estimation</h3>
    <p>To address these challenges, estimators should consider adopting several best practices:</p>
    <ul>
      <li>Shortening the timeframe between estimation and procurement</li>
      <li>Developing stronger relationships with key suppliers</li>
      <li>Incorporating more sophisticated risk analysis into estimates</li>
      <li>Maintaining more frequent communication with clients about market conditions</li>
      <li>Considering alternative materials and construction methods</li>
      <li>Building appropriate contingencies into budgets</li>
    </ul>
    
    <h3>Looking Forward</h3>
    <p>While some normalization in supply chains and labor markets may occur over time, many industry experts believe that the construction sector has entered a "new normal" characterized by greater volatility and uncertainty. Successful estimators will be those who adapt to this reality by embracing new technologies, refining their processes, and developing more sophisticated approaches to risk management.</p>
    
    <p>By acknowledging these challenges and proactively addressing them, construction professionals can continue to deliver reliable estimates that serve as the foundation for successful projects, even in these uncertain times.</p>
    `
  },
  {
    id: '4',
    title: 'Digital Twins: Creating Virtual Replicas of Construction Projects',
    excerpt: 'How digital twin technology is enabling better decision-making and maintenance throughout the building lifecycle.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    date: 'April 28, 2025',
    category: 'Technology',
    author: 'Sarah Davis',
    content: `<p>Sample content for Digital Twins article...</p>`
  },
  {
    id: '5',
    title: 'Drone Surveys: Enhancing Site Monitoring and Inspection',
    excerpt: 'The evolving use of drone technology for construction site surveys, progress monitoring, and quality control.',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
    date: 'April 21, 2025',
    category: 'Construction',
    author: 'David Wilson',
    content: `<p>Sample content for Drone Surveys article...</p>`
  },
  {
    id: '6',
    title: 'The Integration of AI in Modern Construction Management',
    excerpt: 'How artificial intelligence is transforming scheduling, resource allocation, and risk assessment in construction projects.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    date: 'April 15, 2025',
    category: 'Technology',
    author: 'Jennifer Thompson',
    content: `<p>Sample content for AI in Construction article...</p>`
  }
];

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = post ? blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3) : [];
  
  // If post not found, navigate to blog listing
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center text-white/80 text-sm mb-2">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{post.title}</h1>
            <p className="text-white/90">By {post.author}</p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            {/* Tags & Share */}
            <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <span className="font-medium text-gray-700 mr-2">Category:</span>
                <Link 
                  to={`/blog?category=${post.category}`} 
                  className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition-colors"
                >
                  {post.category}
                </Link>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 mr-3">Share:</span>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-brand-navy transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-brand-navy transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">About {post.author}</h3>
                <p className="text-gray-600">
                  {post.author} is an industry expert with over 15 years of experience in construction management and design. 
                  They specialize in {post.category.toLowerCase()} solutions for complex projects across commercial and residential sectors.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={`/blog/${relatedPost.id}`}>
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-40 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        <Link to={`/blog/${relatedPost.id}`} className="text-brand-navy hover:text-brand-gold">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{relatedPost.date}</p>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-brand-navy text-sm font-medium hover:text-brand-gold"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
