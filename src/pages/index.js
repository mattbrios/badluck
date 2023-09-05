import { Sono } from 'next/font/google';
import Hotjar from '@hotjar/browser';
import HomeComponent from './home';
import { useEffect } from 'react';
import Head from 'next/head';

const sono = Sono({ subsets: ['latin'] });
const siteId = 3640567;
const hotjarVersion = 6;

export default function Home() {
  useEffect(() => {
    let mounted = true;
    if(mounted) {
      Hotjar.init(siteId, hotjarVersion);
    }
  
    return () => mounted = false;
  }, []);
  
  return (
    <>
      <Head>
        <title>Bad Luck | Seu novo jeito de perder sempre</title>
      </Head>
      <main className={`flex min-h-screen flex-col items-center justify-center p-8 ${sono.className}`}>
        <HomeComponent />
      </main>
    </>
  )
}
