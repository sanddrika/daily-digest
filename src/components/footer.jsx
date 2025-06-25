import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-4 mt-10">
    <div className="max-w-3xl mx-auto px-4 text-center">
      &copy; {new Date().getFullYear()} Daily Digest. All rights reserved.
    </div>
  </footer>
);

export default Footer; 