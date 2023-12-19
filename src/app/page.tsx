import Image from 'next/image';
import NavBar from './ui/sections/NavBar';
import Blogs from '@/app/ui/sections/Blogs'
import { Suspense } from 'react';
import { CardSkeleton } from './ui/components/skeletons';

export default async function Home() {
  
  return (
    <div>
      <NavBar />
      <Suspense fallback={<h2>Loading</h2>}>
      <Blogs/>
      </Suspense>
      
    </div>
  );
}
