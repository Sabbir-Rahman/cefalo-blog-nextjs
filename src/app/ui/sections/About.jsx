import { getPosts } from '@/app/lib/data';
import NavBar from './NavBar';

const About = async () => {
  const posts = await getPosts();

  return (
    <>
      <NavBar />
      {posts.map((post) => (
        <div className="text-white" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default About;
