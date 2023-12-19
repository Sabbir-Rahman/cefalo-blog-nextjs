import blogsData from '../../lib/placeholder-data';
import BlogCard from '../components/Blogcard';
import { getBlogs } from '@/app/lib/data';

const Blogs = async () => {
  const blogs = await getBlogs()
  
  return (
    <>
      {blogs.data.map((blog) => (
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
