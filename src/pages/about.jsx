import React from 'react';
import '../index.css';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-10 px-2 sm:py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase dark:text-indigo-300">About Us</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-white">
            Your Daily Source of Curated News
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 dark:text-gray-300">
            At Daily Digest, we believe in the power of information to inspire and connect. Our mission is to deliver the most relevant news from around the world, all in one place.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-10 px-2 sm:py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center dark:text-white">Our Mission</h2>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-12">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Curated Content</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">We hand-pick the most important stories to save you time and keep you informed on what matters most.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Lightning Fast</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Our platform is optimized for speed, so you can get your news and get on with your day.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Meet the Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            We are a passionate team of developers and journalists dedicated to creating the best news experience possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 