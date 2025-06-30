import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white mt-12">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-lg font-semibold">Daily Digest</p>
        <p className="mt-2 text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="/about" className="text-gray-400 hover:text-white">About</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 