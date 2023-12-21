import blogsData from '../../lib/placeholder-data';
import BlogCard from '../components/Blogcard';
import { getBlogs, getBlogsByGraphQl } from '@/app/lib/data';

const Blogs = async () => {
  const blogs = await getBlogsByGraphQl()
  console.log(blogs.data.blogs.data)
  
  return (
    <>
      {blogs.data.blogs.data.map((blog) => (
        <BlogCard
          blog={blog.attributes}
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
