import React from 'react';
import '../index.css';
import Header from '../components/header';
import Footer from '../components/footer';

const About = () => {
  return (
    <>
    
      <div className="max-w-3xl mx-auto p-4 mt-10">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-2">
          Welcome to Daily Digest! We are passionate about bringing you the latest and most interesting news from around the world. Our mission is to keep you informed and inspired every day with curated stories and insights.
        </p>
        <p className="text-gray-700 mb-2">
          Our team is dedicated to providing a seamless and enjoyable news reading experience. Whether you're here for breaking headlines or in-depth features, we've got you covered.
        </p>
        <p className="text-gray-700">
          This project is a demo news portal built with React and Tailwind CSS. All news content is fetched from a public API for demonstration purposes.
        </p>
      </div>
    
    </>
  );
};

export default About; 