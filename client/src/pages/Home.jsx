import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import CallToAction from '../components/CallToAction';

// Dummy data for posts
const posts = [
  {
    _id: '1',
    title: 'Introduction to React',
    summary: 'Learn the basics of React, a popular JavaScript library for building user interfaces.',
    imageUrl: 'url-to-image-1'
  },
  {
    _id: '2',
    title: 'Getting Started with Node.js',
    summary: 'A beginner\'s guide to server-side development with Node.js.',
    imageUrl: 'url-to-image-2'
  },
  // Add more posts as needed
];

export default function Home() {
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
