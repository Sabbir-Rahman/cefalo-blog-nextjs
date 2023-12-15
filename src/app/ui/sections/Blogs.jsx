'use client';
import { useState } from 'react';
import blogsData from '../../lib/placeholder-data';
import BlogCard from '../components/Blogcard';

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  return (
    <>
      {blogs.map((blog) => (
        <BlogCard
          blog={blog}
          key={blog.id}
          img={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/200`}
        />
      ))}
    </>
  );
};

export default Blogs;
