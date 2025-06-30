import React, { useEffect, useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        setNews(Array.isArray(data.posts) ? data.posts : []);
        // Initialize likes state with the number of likes from API
        const initialLikes = {};
        (Array.isArray(data.posts) ? data.posts : []).forEach(post => {
          initialLikes[post.id] = post.reactions.likes;
        });
        setLikes(initialLikes);
        setLoading(false);
      })
      .catch(() => {
        setNews([]);
        setLoading(false);
      });
  }, []);

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-solid border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg mt-4 text-gray-700">Loading News...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen dark:bg-gray-900">
      <main className="max-w-7xl mx-auto py-8 px-2 sm:py-12 sm:px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center dark:text-white">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {news.map(item => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group block dark:bg-gray-800 dark:shadow-gray-900"
            >
              <div className="p-4 sm:p-6 flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 overflow-hidden dark:text-white">{item.title}</h3>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="capitalize bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-red-500 mt-4 dark:text-red-400">
                    <button onClick={e => { e.preventDefault(); handleLike(item.id); }} aria-label="Like post" className="focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="font-bold text-lg">{likes[item.id]}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
