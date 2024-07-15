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
     Copy<div className='flex flex-col gap-4 p-12 px-3 max-w-6xl mx-auto'>
  <h1 className='text-3xl lg:text-6xl'>Ignite Your Faith, Illuminate Your Path</h1>
  <p className='text-gray-500 text-xs sm:text-sm'>
  </p>
</div>
<div className='max-w-6xl mx-auto p-3 flex flex-col gap-6 py-4'>
  {posts && posts.length > 0 && (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-wrap gap-4'>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )}
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
        )
      }    </div>
  return (
    <div>
      <div className='flex flex-col gap-4 p-12 px-3 max-w-6xl mx-auto'>
        <h1 className='text-3xl lg:text-6xl'>Ignite Your Faith, Illuminate Your Path</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        </p>
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-6 py-4'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-4'>
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
  )}}
