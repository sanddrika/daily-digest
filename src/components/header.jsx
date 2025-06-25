import React from 'react';

const Header = () => (
  <header className="bg-gray-900 text-white py-4 mb-6">
    <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <a href="/" className="hover:underline">Daily Digest</a>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:underline">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;