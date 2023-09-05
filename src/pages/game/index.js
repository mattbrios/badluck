import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import { Sono } from 'next/font/google'
import ListPrizes from '@/components/Game/ListPrizes';
import Head from 'next/head';

const sono = Sono({ subsets: ['latin'] })

const DynamicComponent = dynamic ( () =>
  import('../../components/Game/LoadRoulette').then((mod) => mod.LoadRoulette), {
    ssr: false,
  }
);
export default function Game () {
  const [ listRaffledPrizes, setListRaffledPrizes ] = useState([]);

  return (
    <>
      <Head>
        <title>Game Your Bad Luck</title>
      </Head>
      <section className={`flex min-h-screen flex-col items-center p-4 ${sono.className}`}>
        <h1 className='text-xl uppercase font-bold max-w-sm text-center'>Você deve me enviar um <span className='text-yellow-200'>PIX</span> ao finalizar este game</h1>
        <p className='max-w-sm text-center my-4 opacity-50 text-xs'>Gire quantas vezes quiser, acumule, some e envie</p>
        <DynamicComponent setList={setListRaffledPrizes} />
        {listRaffledPrizes.length > 0 && (
          <ListPrizes list={listRaffledPrizes} />
        )}
      </section>
    </>
  )
}