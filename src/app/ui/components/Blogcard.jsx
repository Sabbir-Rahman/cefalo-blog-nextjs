import Link from 'next/link';
import '../../public/css/component.css';
import Image from 'next/image';

const Card = ({ blog, img }) => {
  const AUTHOR_BLOGS_URL =
    process.env.AUTHOR_BLOGS_URL || '/blogs/author/';
  const BLOG_DETAILS_URL =
    process.env.BLOG_DETAILS_URL || '/blogs/';
    {console.log(img)}
  return (
    
    <div className="flex justify-center mt-10">
      <div className="card-background">
        <Image className="card-img" src={img} alt="card-img" width={200} height={250} loading='lazy'/>
        <div className="flex flex-col p-4 leading-normal w-full">
          
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.title}
          </h5>
          <Link href={`${AUTHOR_BLOGS_URL}${blog.authorId}`}>
            {' '}
            <h5 className="mb-2 text-lg font-light  tracking-tight text-gray-900 dark:text-white">
              <span className="underline cursor-pointer">
                {' '}
                {blog.authorName}
              </span>{' '}
              <span className="italic">{blog.time}</span>
            </h5>
          </Link>

          <p className="w-full mb-3 font-normal text-gray-700 dark:text-gray-400 truncate-words">
            {blog.body}
          </p>
          <Link href={`${BLOG_DETAILS_URL}${blog.blogId}`} className="ml-auto">
            <button className="btn-primary ml-auto">Read More ...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
