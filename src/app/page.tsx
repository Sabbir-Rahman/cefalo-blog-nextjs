import Image from 'next/image';
import NavBar from './ui/sections/NavBar';
import Blogs from '@/app/ui/sections/Blogs'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Blogs/>
    </div>
  );
}
