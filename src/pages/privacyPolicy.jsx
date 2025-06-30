import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-8 px-2 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase dark:text-indigo-300">Privacy Policy</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-white">
            Your Privacy is Important to Us
          </p>
        </div>
        <div className="mt-8 sm:mt-12 prose prose-indigo prose-lg text-gray-500 mx-auto dark:text-gray-300">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <h3>Interpretation and Definitions</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          <h3>Collecting and Using Your Personal Data</h3>
          <p>
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Usage Data.
          </p>
          <h3>Usage Data</h3>
          <p>
            Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 