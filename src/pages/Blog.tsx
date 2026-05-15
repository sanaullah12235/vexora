import { Section, FadeIn, GlassCard, Glow } from '../components/UI';
import { ArrowRight, Search as SearchIcon, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt: 'How artificial intelligence is reshaping the way we build and interact with the web in 2026. From auto-generated layouts to predictive UX.',
    author: 'Alex Rivera',
    date: 'May 10, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Mastering Glassmorphism in UI Design',
    excerpt: 'A deep dive into creating premium, translucent interfaces that stand out. Learn the physics of light and blur in modern CSS.',
    author: 'Sarah Chen',
    date: 'May 8, 2026',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Scaling SaaS Products to 1M Users',
    excerpt: 'Infrastructure and architectural patterns for high-growth software platforms. Database sharding, caching strategies, and more.',
    author: 'Marcus Thorne',
    date: 'May 5, 2026',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Why Premium Branding Matters for Startups',
    excerpt: 'How visual identity impacts investor confidence and customer acquisition. The ROI of high-end design.',
    author: 'Elena Vance',
    date: 'May 1, 2026',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800'
  }
];

const Blog = () => {
  return (
    <div className="pt-20">
      <Section className="text-center relative overflow-visible">
        <Glow color="cyan" className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 opacity-20" />
        <FadeIn>
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">NEWS & INSIGHTS</span>
          <h1 className="text-6xl lg:text-6xl font-bold mb-6 tracking-tighter">Insights <span className="text-gradient">& Ideas</span></h1>
          <p className="text-xl text-grayText max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of luxury design and cutting-edge technology.
          </p>
        </FadeIn>
      </Section>

      {/* Featured Article */}
      <Section className="py-0">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <GlassCard className="p-0 overflow-hidden flex flex-col lg:flex-row h-full lg:h-[500px] border-primary/20 bg-primary/5">
              <div className="w-full lg:w-3/5 h-[300px] lg:h-auto overflow-hidden">
                <img src={posts[0].image} alt={`Featured Article: ${posts[0].title} - VEXORA Insights`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full lg:w-2/5 p-12 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-accent text-xs font-bold uppercase tracking-widest">Featured</span>
                    <span className="text-grayText text-xs font-bold uppercase tracking-widest">{posts[0].date}</span>
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-bold mb-6 hover:text-accent transition-colors cursor-pointer">{posts[0].title}</h2>
                 <p className="text-grayText leading-relaxed mb-10 text-lg">{posts[0].excerpt}</p>
                 <Link to={`/blog/${posts[0].id}`} className="btn-primary self-start">Read Article</Link>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Technology', 'Design', 'Engineering', 'Branding'].map((cat) => (
                <button key={cat} className="px-6 py-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all text-sm font-bold uppercase tracking-widest">
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-96">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-grayText" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-4 focus:outline-none focus:border-accent text-white"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard className="group p-0 overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all duration-500">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={`${post.title} - ${post.category} insights by VEXORA`} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-[10px] font-bold text-accent uppercase tracking-[0.2em] border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-grayText text-xs font-bold uppercase tracking-widest mb-4">{post.date}</span>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                    <p className="text-grayText leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-secondary/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-8">
              <Mail size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Stay Ahead of the <span className="text-gradient">Curve</span></h2>
            <p className="text-xl text-grayText mb-12">
              Subscribe to our weekly newsletter for the latest tech insights and design trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="Enter your email address" 
                 className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent text-white"
               />
               <button className="btn-primary whitespace-nowrap px-10">Subscribe</button>
            </form>
            <p className="text-xs text-grayText/50 mt-6">We respect your privacy. No spam, ever.</p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
