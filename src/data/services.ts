import { 
  Globe, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  Search, 
  ShieldCheck, 
  Layers, 
  Cpu 
} from 'lucide-react';

export const servicesData = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    slug: 'web-development',
    shortDesc: 'Custom, high-performance websites built with the latest technologies.',
    fullDesc: 'We build websites that are not just visually stunning but also lightning fast, secure, and optimized for conversions. Our web development team uses the latest frameworks like React and Next.js to deliver world-class digital experiences.',
    features: ['Single Page Applications', 'Progressive Web Apps', 'CMS Integration', 'API Development', 'E-commerce Capabilities', 'Performance Tuning'],
    benefits: ['Increased Traffic', 'Higher Conversion Rates', 'Seamless User Experience', 'Scalable Architecture'],
    process: ['Discovery', 'Architecture', 'Design', 'Development', 'Testing', 'Launch'],
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    faqs: [
      { q: 'How long does it take?', a: 'Typically 4-8 weeks depending on complexity.' },
      { q: 'Is it mobile friendly?', a: 'Absolutely, we follow a mobile-first approach.' }
    ]
  },
  {
    id: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    shortDesc: 'Native and cross-platform mobile applications for iOS and Android.',
    fullDesc: 'Our mobile experts craft premium applications that provide a seamless native experience. We specialize in React Native and Flutter, ensuring your app reaches users on both iOS and Android with a single, high-quality codebase.',
    features: ['Native iOS & Android', 'Cross-platform Solutions', 'Offline Capability', 'Push Notifications', 'Real-time Data', 'Biometric Auth'],
    benefits: ['Direct User Engagement', 'Brand Loyalty', 'Streamlined Operations', 'Monetization Potential'],
    process: ['User Research', 'Wireframing', 'Prototyping', 'App Development', 'QA', 'Store Submission'],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    faqs: [
      { q: 'Do you publish to the stores?', a: 'Yes, we handle the entire submission process.' },
      { q: 'Can you integrate APIs?', a: 'We specialize in complex backend integrations.' }
    ]
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDesc: 'User-centric designs that are visually stunning and highly functional.',
    fullDesc: 'Design is more than just looks; it is about how it works. Our UI/UX team combines psychological principles with modern aesthetics to create intuitive interfaces that users love to interact with.',
    features: ['User Research', 'Visual Identity', 'Interactive Prototyping', 'Design Systems', 'Usability Testing', 'Motion Design'],
    benefits: ['Reduced Bounce Rates', 'Increased User Satisfaction', 'Consistent Branding', 'Intuitive Navigation'],
    process: ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'],
    tech: ['Figma', 'Adobe Creative Cloud', 'After Effects', 'Framer'],
    faqs: [
      { q: 'Can you redesign our existing site?', a: 'Yes, we specialize in modernizing legacy interfaces.' },
      { q: 'Do you provide design systems?', a: 'We build scalable libraries for your internal teams.' }
    ]
  },
  {
    id: 'ecommerce-development',
    icon: ShoppingCart,
    title: 'E-commerce Development',
    slug: 'ecommerce-development',
    shortDesc: 'Scalable online stores that drive sales and provide seamless shopping.',
    fullDesc: 'We build robust e-commerce platforms designed to turn visitors into customers. From custom Shopify builds to bespoke headless solutions, we ensure your store is fast, secure, and ready to scale.',
    features: ['Custom Cart Flow', 'Payment Integration', 'Inventory Management', 'Customer Portals', 'Multi-currency Support', 'Abandoned Cart Recovery'],
    benefits: ['24/7 Revenue Stream', 'Global Reach', 'Detailed Analytics', 'Personalized Shopping'],
    process: ['Strategy', 'UX Design', 'Platform Setup', 'Development', 'Payment Integration', 'Launch'],
    tech: ['Shopify', 'WooCommerce', 'Stripe', 'Node.js', 'Next.js'],
    faqs: [
      { q: 'What payment methods do you support?', a: 'We integrate with Stripe, PayPal, and local gateways.' },
      { q: 'Can you handle thousands of products?', a: 'Our solutions are built for high-scale enterprise needs.' }
    ]
  },
  {
    id: 'seo-optimization',
    icon: Search,
    title: 'SEO & Performance',
    slug: 'seo-optimization',
    shortDesc: 'Data-driven strategies to boost your search engine rankings.',
    fullDesc: 'Our SEO experts combine technical excellence with content strategy to ensure your brand stands out on search engines. We focus on Core Web Vitals and organic growth to drive sustainable traffic.',
    features: ['Technical SEO Audit', 'Keyword Research', 'On-page Optimization', 'Content Strategy', 'Link Building', 'Core Web Vitals Tuning'],
    benefits: ['Organic Traffic Growth', 'Better Visibility', 'Brand Credibility', 'Competitive Advantage'],
    process: ['Audit', 'Analysis', 'Optimization', 'Content Creation', 'Monitoring'],
    tech: ['Ahrefs', 'SEMRush', 'Google Analytics', 'Search Console', 'Lighthouse'],
    faqs: [
      { q: 'When will I see results?', a: 'SEO is a marathon, usually showing significant gains in 3-6 months.' },
      { q: 'Is it included in web development?', a: 'We build every site with SEO-ready architecture.' }
    ]
  },
  {
    id: 'website-maintenance',
    icon: ShieldCheck,
    title: 'Website Maintenance',
    slug: 'website-maintenance',
    shortDesc: 'Reliable support to keep your digital assets secure and up-to-date.',
    fullDesc: 'A website is never truly finished. We provide ongoing support to ensure your digital products stay secure, performant, and aligned with the latest technology updates.',
    features: ['Security Patches', 'Content Updates', 'Backup Management', '24/7 Monitoring', 'Performance Audits', 'Bug Fixes'],
    benefits: ['Zero Downtime', 'Peace of Mind', 'Up-to-date Features', 'Secure Data'],
    process: ['Assessment', 'Setup', 'Continuous Monitoring', 'Monthly Reporting'],
    tech: ['AWS Monitoring', 'Cloudflare', 'GitHub Actions', 'Vercel'],
    faqs: [
      { q: 'Do you offer monthly plans?', a: 'Yes, we have tiered support packages for every need.' },
      { q: 'Can you fix a site someone else built?', a: 'We can assess and take over management of most React/Node stacks.' }
    ]
  },
  {
    id: 'branding-strategy',
    icon: Layers,
    title: 'Branding & Strategy',
    slug: 'branding',
    shortDesc: 'Cohesive brand identities that resonate with your target audience.',
    fullDesc: 'We help you define your voice and visual identity in a crowded market. Our branding process goes beyond logos; we build full identities that communicate your values and vision to the world.',
    features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Theory', 'Market Positioning', 'Voice & Tone'],
    benefits: ['Brand Recognition', 'Customer Trust', 'Premium Positioning', 'Emotional Connection'],
    process: ['Discovery', 'Concept', 'Refinement', 'Delivery', 'Implementation'],
    tech: ['Adobe Illustrator', 'Figma', 'Procreate', 'Coolors'],
    faqs: [
      { q: 'Do you provide high-res files?', a: 'You receive full source files and vector formats.' },
      { q: 'How many concepts do we get?', a: 'We typically provide 3-5 distinct creative directions.' }
    ]
  },
  {
    id: 'custom-software',
    icon: Cpu,
    title: 'Custom Software',
    slug: 'custom-software',
    shortDesc: 'Tailored software to solve unique business challenges.',
    fullDesc: 'When off-the-shelf solutions aren\'t enough, we build custom software that fits your specific business workflows. We specialize in complex dashboards, internal tools, and automated systems.',
    features: ['Bespoke Dashboards', 'Internal Tooling', 'Legacy Migration', 'System Integration', 'Data Automation', 'Cloud Architecture'],
    benefits: ['Optimized Workflows', 'No Technical Debt', 'Full Ownership', 'Seamless Scalability'],
    process: ['Requirement Analysis', 'Prototyping', 'Agile Development', 'Deployment'],
    tech: ['Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
    faqs: [
      { q: 'Can it integrate with my CRM?', a: 'We build custom bridges for Salesforce, HubSpot, and more.' },
      { q: 'Is it secure?', a: 'Security is baked into our architecture from day one.' }
    ]
  }
];
