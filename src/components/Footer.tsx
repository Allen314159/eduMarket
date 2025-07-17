import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const quickLinks = [
    'About Us',
    'Courses',
    'Instructors',
    'Blog',
    'Contact',
    'Help Center',
  ];

  const categories = [
    'Programming',
    'Languages',
    'Marketing',
    'Design',
    'Business',
    'Data Science',
  ];

  return (
    <footer className="bg-gradient-to-r from-hero-dark via-hero-purple to-hero-dark border-t border-white/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="favicon.ico" alt="EduMarket Logo" className="w-8 h-8 object-contain rounded-lg" />
              <h3 className="text-xl font-bold text-white">EduMarket</h3>
            </div>
            <p className="text-white/70 mb-4">
              AI-powered educational platform helping learners discover the perfect courses for their journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-hero-button transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-white/70 hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button className="text-white/70 hover:text-white transition-colors text-left">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-hero-blue" />
                <span className="text-white/70">support@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-hero-blue" />
                <span className="text-white/70">+84 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-hero-blue" />
                <span className="text-white/70">Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70">
            © 2025 EduMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
