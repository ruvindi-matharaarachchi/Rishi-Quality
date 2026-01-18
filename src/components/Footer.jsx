import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Recipes', 'Blog', 'Careers'],
    Support: ['Help Center', 'Contact', 'Shipping', 'Returns'],
    'Follow Us': ['Instagram', 'Facebook', 'Twitter', 'YouTube'],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'Blog' },
  ];

  return (
    <footer className="bg-black text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4"
            >
              <img 
                src="/logo.png" 
                alt="Rishi Quality Logo" 
                className="w-12 h-12 object-contain"
              />
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering fresh, plant-based meals to your door. Cleaner
              ingredients, better nutrition, happier you.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-orange transition-all border border-white/10 hover:border-glow-orange"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent-orange transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold mb-2">
                Get the latest recipes and offers
              </h4>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for exclusive content
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 glass rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-glow-orange border border-white/10"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-orange text-white rounded-full font-medium hover:from-primary-700 hover:to-orange-600 transition-all glow-red flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 flex items-center justify-between text-sm text-gray-400">
          <p>
            © 2024 All rights reserved.
          </p>
          <p className="text-gray-500">v3.4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
