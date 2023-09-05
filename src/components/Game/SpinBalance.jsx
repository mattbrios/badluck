import React from 'react';
import Image from 'next/image';
import styled from '@/styles/Components/SpinBalance.module.scss';

import SpinIcon from '../../../public/spin-icon.svg';

export default function SpinBalance () {
  return (
    <div className={styled.spinBalanceContainer}>
      <Image
        src={SpinIcon}
        alt='Ícone de rodadas'
        height={24}
      />
      <div className={styled.spinValue}>
        <span className={styled.label}>Você possui</span>
        <span>4 giros</span>
      </div>
    </div>
  )
}
