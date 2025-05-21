import React from 'react';
import Container from '../ui/Container';
import Map from '../ui/Map';
import { FaFacebookF, FaInstagram, FaReddit, FaXTwitter } from 'react-icons/fa6';

const footerLinks = {
  explore: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Business', href: '#' },
    { name: 'Coverage Areas', href: '#' },
    { name: 'Packages', href: '#' },
  ],
  workWithUs: [
    { name: 'Careers', href: '#' },
  ],
  support: [
    { name: 'Contact', href: '#' },
    { name: "FAQ's", href: '#' },
    { name: 'Security Advisory', href: '#' },
    { name: 'Manuals', href: '#' },
  ],
  myWave: [
    { name: 'Login', href: '#' },
    { name: 'Sign Up', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'Twitter', icon: FaXTwitter, href: '#' },
  { name: 'Reddit', icon: FaReddit, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-white/10 mt-auto">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-13 gap-8">
            {/* Logo Column */}
            <div className="lg:col-span-2 flex items-center lg:justify-start justify-center">
              <img src="/images/logo.png" alt="WaveComm Logo" className="h-32 w-auto" />
            </div>

            {/* Main content columns */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Explore Column */}
              <div className="md:col-span-1">
                <h3 className="text-white font-semibold mb-4">Explore</h3>
                <ul className="space-y-2">
                  {footerLinks.explore.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Work With Us Column */}
              <div className="md:col-span-1">
                <h3 className="text-white font-semibold mb-4">Work With Us</h3>
                <ul className="space-y-2">
                  {footerLinks.workWithUs.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Column */}
              <div className="md:col-span-1">
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MyWave Column */}
              <div className="md:col-span-1">
                <h3 className="text-white font-semibold mb-4">MyWave</h3>
                <ul className="space-y-2">
                  {footerLinks.myWave.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Column */}
              <div className="md:col-span-1">
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-4 relative h-[300px] rounded-xl overflow-hidden">
              <Map />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}