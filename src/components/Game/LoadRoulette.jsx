/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';

import styled from '@/styles/components/game/LoadRoulette.module.scss';
// import { useSpinContext } from '@/providers/SpinContext';

const prizes = [ 
  { id: 1, option: 'R$ 20', style: { backgroundColor: '#be123c' } },
  { id: 0, option: 'R$ 45', style: { backgroundColor: '#7c3aed' } },
  { id: 3, option: 'R$ 150', style: { backgroundColor: '#334155' } },
  { id: 4, option: 'R$ 30', style: { backgroundColor: '#047857' } },
  { id: 5, option: 'R$ 0,05', style: { backgroundColor: '#ea580c' } },
  { id: 6, option: 'R$ 500', style: { backgroundColor: '#0369a1' } },
  { id: 0, option: 'R$ 999', style: { backgroundColor: '#431407' } },
];

export const LoadRoulette = ({setList}) => {
  // const { prizes } = useSpinContext();
  const [ spined, setSpined ] = useState(false);
  const [ prize, setPrize ] = useState(0);
  const [ spinText, setSpinText ] = useState('Girar');
  const [ raffledPrizes, setRaffledPrizes ]= useState([]);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * prizes.length);
    setPrize(newPrizeNumber);
    setSpined(true);
    setSpinText('Aguarde...');
    setTimeout(() => {
      setRaffledPrizes( [prizes[newPrizeNumber].option, ...raffledPrizes] );
    }, 2500);
  }

  useEffect(() => {
    if ( raffledPrizes.length > 0 ) {
      setList(raffledPrizes);
    }
  }, [raffledPrizes]);
  

  const spinStoped = () => {
    setSpined(false);
    setSpinText('Girar')
  }

  return (
    <div className={styled.loadRouletteContainer}>
      <Wheel
        mustStartSpinning={spined}
        prizeNumber={prize}
        data={prizes}
        textColors={['#FFFFFF']}
        onStopSpinning={spinStoped}
        outerBorderColor='#B0BEC5'
        radiusLineWidth={0}
        perpendicularText={true}
        textDistance={70}
        spinDuration={0.2}
      />
      <div className={`${styled.spinButton} ${spined ? styled.btnDisabled : ''}`} onClick={handleSpinClick}>
        {spinText}
      </div>
    </div>
  )
}
