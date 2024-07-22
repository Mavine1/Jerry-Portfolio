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
      <div className='flex flex-col gap-4 p-4 mx-auto px-3 max-w-6xl '>
        <h1 className='text-2xl '><em>Ignite Your Faith, Illuminate Your Path</em></h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
           Discover daily inspiration and spiritual insights to guide your journey
        </p>
      </div>
      <div className='flex px-6 py-2 flex-col items-center mb-5'>
  {posts && posts.length > 0 && (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-wrap sm:flex-nowrap py-2 lg:gap-8'>
        {posts.slice(0, 3).map((post) => (
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