import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-8 px-2 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase dark:text-indigo-300">Terms of Service</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-white">
            Please Read These Terms Carefully
          </p>
        </div>
        <div className="mt-8 sm:mt-12 prose prose-indigo prose-lg text-gray-500 mx-auto dark:text-gray-300">
          <p>
            By accessing or using Daily Digest, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
          </p>
          <h3>Use of Service</h3>
          <p>
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for your use of the Service and for any content you provide.
          </p>
          <h3>Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Daily Digest and its licensors.
          </p>
          <h3>Termination</h3>
          <p>
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <h3>Changes to Terms</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 