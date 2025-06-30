import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then(data => {
        setQuotes(Array.isArray(data.quotes) ? data.quotes : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load quotes');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-8 px-2 sm:py-12 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center dark:text-white">Inspirational Quotes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {quotes.map(quote => (
            <div key={quote.id} className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-6 sm:p-10">
              <p className="text-lg sm:text-xl italic text-gray-800 dark:text-gray-100 mb-2 sm:mb-4">"{quote.quote}"</p>
              <p className="text-right text-gray-600 dark:text-gray-300 font-semibold text-sm sm:text-base">- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes; 