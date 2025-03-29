import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">Om Tours</h2>
          <p className="text-sm mt-2">
            Your AI-powered travel assistant for personalized itineraries and seamless travel planning.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#destinations" className="hover:text-orange-400">Destinations</a></li>
            <li><a href="#services" className="hover:text-orange-400">Our Services</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
            <li><a href="/signup" className="hover:text-orange-400">Sign Up</a></li>
            <li><a href="/login" className="hover:text-orange-400">Login</a></li>
            <li><a href="/forgotpassword" className="hover:text-orange-400">Forgot Password</a></li>
          </ul>
        </div>
        
        {/* Legal */}
        <div>
          <h3 className="text-lg font-medium text-white">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#terms" className="hover:text-orange-400">Terms of Service</a></li>
            <li><a href="#privacy" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#cookies" className="hover:text-orange-400">Cookie Policy</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-medium text-white">Contact Us</h3>
          <p className="text-sm mt-2">Email: info@omtours.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Address: 123 Travel St, City, Country</p>
        </div>
        
        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-medium text-white">Subscribe to our Newsletter</h3>
          <form className="mt-2">
            <input type="email" placeholder="Enter your email" className="p-2 rounded" />
            <button type="submit" className="bg-orange-500 text-white p-2 rounded">Subscribe</button>
          </form>
        </div>

        {/* Additional Links */}
        <div>
          <h3 className="text-lg font-medium text-white">Popular Destinations</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#goa" className="hover:text-orange-400">Goa</a></li>
            <li><a href="#kerala" className="hover:text-orange-400">Kerala</a></li>
            <li><a href="#rajasthan" className="hover:text-orange-400">Rajasthan</a></li>
          </ul>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-lg font-medium text-white">Testimonials</h3>
          <p className="text-sm mt-2">&quot;Best travel experience ever!&quot; - Jane Doe</p>
          <p className="text-sm">&quot;Highly recommend Om Tours!&quot; - John Smith</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" aria-label="Facebook" className="hover:text-orange-400"><FaFacebookF size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-400"><FaTwitter size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-orange-400"><FaInstagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-orange-400"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Om Tours. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
