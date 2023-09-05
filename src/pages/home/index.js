import { Button } from '@/components/Button';
import Link from 'next/link';
import React from 'react'

export default function HomeComponent () {
  return (
    <div className=''>
      <h1 className='text-xl uppercase font-bold text-center mb-4'>Seu novo jogo da<br/><span className='text-red-400 text-4xl'>má sorte</span></h1>
      <div>
        <Link href='/game'>
          <Button>Começar a patifaria</Button>
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    }
  }
};