import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load post');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!post) return null;

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-0 mt-6 sm:mt-10 mb-10">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block dark:text-blue-500 dark:hover:text-blue-800 text-base sm:text-lg">&larr; Back to Home</Link>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 dark:text-white">{post.title}</h1>
      <p className="text-gray-800 dark:text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">{post.body}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags && post.tags.map(tag => (
          <span key={tag} className="capitalize bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-100">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center text-red-500 dark:text-red-400 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <span className="font-bold text-lg">{post.reactions?.likes ?? 0}</span>
      </div>
    </div>
  );
};

export default NewsDetail; 