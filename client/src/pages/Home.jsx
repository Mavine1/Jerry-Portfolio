import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-4 p-4 px-3 max-w-6xl mx-auto'>
        <h1 className='text-2xl '><em>Ignite Your Faith, Illuminate Your Path</em></h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
           Discover daily inspiration and spiritual insights to guide your journey
        </p>
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-2 py-4'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
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
