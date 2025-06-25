import React, { useEffect, useState } from 'react';
import '../index.css';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        setNews(Array.isArray(data.posts) ? data.posts : []);
        setLoading(false);
      })
      .catch(() => {
        setNews([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <>
  
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Latest News</h1>
        <div className="space-y-4">
          {news.map((item, idx) => (
            <div key={idx} className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-2">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
  
    </>
  );
};

export default Home;
