import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Shield,
  Zap,
  Users,
  BarChart3,
  HardHat,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Building2 className="h-8 w-8 text-amber-600 mr-2" />
            <span className="text-xl font-bold tracking-tighter text-stone-900">CPMG<span className="text-amber-600">.GE</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  currentPage === item.id ? 'text-amber-600' : 'text-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-stone-600 hover:text-amber-600 hover:bg-stone-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-amber-500 mr-2" />
              <span className="text-2xl font-bold tracking-tighter text-white">CPMG<span className="text-amber-500">.GE</span></span>
            </div>
            <p className="text-stone-400 max-w-md mb-8">
              Your trusted partner for efficient and high-quality construction management. We will help you build your future.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-amber-500 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-amber-500 transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-amber-500 transition-colors">Portfolio</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-amber-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Details</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                <span>Tbilisi, Georgia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3" />
                <span>+995 322 424648</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3" />
                <span>info@cpmg.ge</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-16 pt-8 text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Construction Project Management Group. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Founded 2021</p>
        </div>
      </div>
    </footer>
  );
};

// --- Page Content ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070" 
            alt="Construction Site" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Your Trusted Partner for <span className="text-amber-500">Efficient</span> Construction Management
            </h1>
            <p className="text-xl text-stone-300 mb-10 leading-relaxed">
              We will help you build your future. Delivering high-quality results through precision, transparency, and expert management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold transition-all flex items-center justify-center group"
              >
                Contact us for a consultation
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('portfolio')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-md font-semibold transition-all"
              >
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-xl shadow-sm border border-stone-100">
              <div className="text-4xl font-bold text-amber-600 mb-2">15</div>
              <div className="text-stone-500 uppercase tracking-widest text-sm font-semibold">Completed Projects</div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm border border-stone-100">
              <div className="text-4xl font-bold text-amber-600 mb-2">118 M GEL</div>
              <div className="text-stone-500 uppercase tracking-widest text-sm font-semibold">Total Value Delivered</div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm border border-stone-100">
              <div className="text-4xl font-bold text-amber-600 mb-2">75+ M GEL</div>
              <div className="text-stone-500 uppercase tracking-widest text-sm font-semibold">Current Project Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
              <h3 className="text-4xl font-bold text-stone-900 leading-tight">Comprehensive Construction Management Solutions</h3>
            </div>
            <button 
              onClick={() => setCurrentPage('services')}
              className="text-stone-900 font-semibold flex items-center hover:text-amber-600 transition-colors"
            >
              Explore all services <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: 'Project Planning', desc: 'Detailed feasibility studies and strategic scheduling to ensure project success from day one.' },
              { icon: Shield, title: 'Quality Control', desc: 'Rigorous oversight and technical inspections to maintain the highest industry standards.' },
              { icon: Zap, title: 'Efficiency Management', desc: 'Optimizing resources and timelines to deliver projects on budget and ahead of schedule.' },
            ].map((service, idx) => (
              <div key={idx} className="group p-8 border border-stone-200 rounded-2xl hover:border-amber-600 transition-all duration-300">
                <div className="bg-stone-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                  <service.icon className="h-7 w-7 text-stone-700 group-hover:text-amber-600 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-4">{service.title}</h4>
                <p className="text-stone-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">Portfolio Highlights</h2>
            <h3 className="text-4xl font-bold leading-tight">Building Excellence Across Georgia</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
                alt="Project 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Running Project</span>
                <h4 className="text-2xl font-bold mb-2">Cartu Universal LLC</h4>
                <p className="text-stone-300 text-sm">Value: 75+ M GEL • Status: Ice-cream productions, warehouses and business center</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2062" 
                alt="Project 2" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Completed</span>
                <h4 className="text-2xl font-bold mb-2">Residential Complex Alpha</h4>
                <p className="text-stone-300 text-sm">Value: 28 M GEL • Completed: 2023</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={() => setCurrentPage('portfolio')}
              className="inline-flex items-center text-amber-500 font-semibold hover:text-white transition-colors"
            >
              View all 15 completed projects <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start your next project?</h2>
          <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
            Partner with CPMG for expert management that guarantees quality, efficiency, and peace of mind.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-amber-600 hover:bg-stone-100 px-10 py-5 rounded-md font-bold text-lg transition-all shadow-xl"
          >
            Contact us for a consultation
          </button>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-stone-50 py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-stone-900 mb-6 tracking-tight">About Us</h1>
          <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
            Founded in 2021, Construction Project Management Group (CPMG) was established with a clear vision: to redefine construction management in Georgia through transparency, efficiency, and uncompromising quality.
          </p>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Our Mission</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Our mission is to be the most trusted partner for businesses and investors in the construction sector. We bridge the gap between ambitious architectural visions and practical, high-quality execution.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                By leveraging modern management methodologies and deep local expertise, we ensure that every project we touch contributes to a better-built future for our clients and our community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-stone-50 p-10 rounded-2xl border border-stone-100">
                <div className="text-amber-600 font-bold text-4xl mb-2">2021</div>
                <div className="text-stone-500 font-medium">Founding Year</div>
              </div>
              <div className="bg-stone-900 p-10 rounded-2xl text-white">
                <div className="text-amber-500 font-bold text-4xl mb-2">15+</div>
                <div className="text-stone-400 font-medium">Expert Staff</div>
              </div>
              <div className="bg-stone-900 p-10 rounded-2xl text-white">
                <div className="text-amber-500 font-bold text-4xl mb-2">100%</div>
                <div className="text-stone-400 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-stone-50 p-10 rounded-2xl border border-stone-100">
                <div className="text-amber-600 font-bold text-4xl mb-2">193M</div>
                <div className="text-stone-500 font-medium">GEL Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', desc: 'We operate with absolute transparency in every contract, budget, and report.' },
              { title: 'Precision', desc: 'Construction is a game of millimeters. We manage every detail with surgical accuracy.' },
              { title: 'Innovation', desc: 'We adopt the latest digital tools for project tracking and resource optimization.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-stone-900 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Our Methodology</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              We don't just "watch" construction; we drive it. Our methodology is based on proactive risk management and continuous optimization.
            </p>
            <div className="space-y-6">
              {[
                'Phase-gate project controls to ensure quality at every milestone.',
                'Real-time budget tracking and cost-benefit analysis.',
                'Strategic procurement to mitigate supply chain risks.',
                'Rigorous health, safety, and environmental (HSE) standards.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: 'Full Project Management',
      desc: 'End-to-end oversight of your construction project, from initial concept to final handover.',
      benefits: ['Single point of accountability', 'Optimized timelines', 'Budget adherence'],
      icon: HardHat
    },
    {
      title: 'Technical Supervision',
      desc: 'Expert on-site monitoring to ensure all work complies with architectural plans and safety regulations.',
      benefits: ['Compliance guarantee', 'Risk mitigation', 'Quality assurance'],
      icon: Shield
    },
    {
      title: 'Cost Management & Auditing',
      desc: 'Precise financial control, including quantity surveying, tender management, and cost auditing.',
      benefits: ['Maximum ROI', 'No hidden costs', 'Financial transparency'],
      icon: BarChart3
    },
    {
      title: 'Procurement & Logistics',
      desc: 'Strategic sourcing of materials and equipment to ensure availability and cost-efficiency.',
      benefits: ['Reduced lead times', 'Bulk pricing advantages', 'Reliable supply chain'],
      icon: Zap
    },
    {
      title: 'Consultancy & Feasibility',
      desc: 'Strategic advice for investors and developers to assess project viability and potential.',
      benefits: ['Data-driven decisions', 'Market insights', 'Risk assessment'],
      icon: Users
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Our Services</h1>
          <p className="text-xl text-stone-400 max-w-3xl leading-relaxed">
            We provide a full spectrum of construction management services designed to protect your investment and deliver excellence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-12 items-start ${idx !== services.length - 1 ? 'border-b border-stone-100 pb-16' : ''}`}>
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 flex-shrink-0">
                  <service.icon className="h-10 w-10 text-amber-600" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-stone-900 mb-4">{service.title}</h2>
                  <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-3xl">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center text-stone-800 font-semibold bg-stone-50 px-4 py-3 rounded-lg border border-stone-100">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mr-3" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Why Choose CPMG?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Local Expertise', desc: 'Deep understanding of Georgia\'s construction landscape and regulations.' },
              { title: 'Digital First', desc: 'We use advanced software for project tracking and reporting.' },
              { title: 'Client-Centric', desc: 'Your business goals are the primary driver of our management strategy.' },
              { title: 'Proven Track Record', desc: '118M GEL in successfully delivered projects since 2021.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PortfolioPage = () => {
  const completedProjects = [
    { name: 'Residential Complex Alpha', value: '28 M GEL', year: '2023', summary: 'A high-end residential development featuring 120 units and premium amenities.' },
    { name: 'Industrial Hub Tbilisi', value: '18 M GEL', year: '2022', summary: 'State-of-the-art logistics and warehousing facility for international logistics partner.' },
    { name: 'Boutique Hotel Old Town', value: '12 M GEL', year: '2023', summary: 'Careful restoration and management of a historic building into a 40-room luxury hotel.' },
    { name: 'Corporate HQ Plaza', value: '35 M GEL', year: '2024', summary: 'Modern office complex with sustainable design and smart building integration.' },
    { name: 'Retail Center West', value: '25 M GEL', year: '2022', summary: 'Fast-track construction management of a regional shopping destination.' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-stone-50 py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-stone-900 mb-6 tracking-tight">Project Portfolio</h1>
          <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
            A showcase of our commitment to excellence. From large-scale industrial hubs to luxury residential developments.
          </p>
        </div>
      </section>

      {/* Running Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Current Operations</h2>
            <h3 className="text-3xl font-bold text-stone-900">Running Projects</h3>
          </div>
          
          <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-80 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
                alt="Current Project" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center text-amber-500 font-bold text-sm uppercase tracking-widest mb-6">
                <Clock className="h-5 w-5 mr-2" />
                In Progress
              </div>
              <h4 className="text-4xl font-bold text-white mb-6">Cartu Universal LLC</h4>
              <p className="text-stone-400 text-lg leading-relaxed mb-10">
                Ice-cream productions, warehouses and business center. We are providing full project management and technical supervision.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-stone-500 text-xs uppercase tracking-widest mb-1">Project Value</div>
                  <div className="text-white text-2xl font-bold">75+ M GEL</div>
                </div>
                <div>
                  <div className="text-stone-500 text-xs uppercase tracking-widest mb-1">Status</div>
                  <div className="text-white text-2xl font-bold">In Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Proven Success</h2>
            <h3 className="text-3xl font-bold text-stone-900">Completed Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-xl font-bold text-stone-900">{project.name}</h4>
                    <span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-full">{project.year}</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-8">
                    {project.summary}
                  </p>
                  <div className="pt-6 border-t border-stone-100">
                    <div className="text-stone-400 text-xs uppercase tracking-widest mb-1">Value</div>
                    <div className="text-amber-600 font-bold text-lg">{project.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-stone-500 italic">And 10 more successfully delivered projects across Georgia.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    details: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you shortly.');
    setFormData({ name: '', company: '', email: '', phone: '', details: '', message: '' });
  };

  return (
    <div className="pt-20">
      <section className="bg-stone-50 py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-stone-900 mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
            Partner with us to build your future. Reach out for a consultation or to learn more about our management solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-10">Get in Touch</h2>
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="bg-amber-50 p-4 rounded-xl mr-6">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-1">Call Us</h3>
                    <p className="text-stone-600">+995 322 424648</p>
                    <p className="text-stone-400 text-sm mt-1">Mon - Fri, 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 p-4 rounded-xl mr-6">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-1">Email Us</h3>
                    <p className="text-stone-600">info@cpmg.ge</p>
                    <p className="text-stone-400 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 p-4 rounded-xl mr-6">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-1">Visit Us</h3>
                    <p className="text-stone-600">Tbilisi, Georgia</p>
                    <p className="text-stone-400 text-sm mt-1">Business District Office</p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-16 bg-stone-100 rounded-3xl h-80 overflow-hidden border border-stone-200 shadow-lg relative group">
                <img 
                  src="https://images.unsplash.com/photo-1561571590-9515664972f7?auto=format&fit=crop&q=80&w=2070" 
                  alt="Tbilisi Map Location" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-stone-200 shadow-sm flex items-center">
                  <MapPin className="h-4 w-4 text-amber-600 mr-2" />
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">Tbilisi, Georgia</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-stone-50 p-10 lg:p-16 rounded-3xl border border-stone-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-8">Request a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Project Details (Type, Location, Scale)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'portfolio': return <PortfolioPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
