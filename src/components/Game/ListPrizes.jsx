import React, { useEffect, useState } from 'react'

export default function ListPrizes ({list}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(list.length > 0) {
      let listInNumbers = [];
      list.map(prize => {
        prize = prize.replace('R$ ', '');
        prize = prize.replace(',', '.');
        listInNumbers.push(Number(prize));
      })
      setTotal( listInNumbers.reduce((sumValues, element) => sumValues + element, 0) );
    }
  }, [list])
  
  return (
    <div className='p-4 bg-slate-800 w-full max-w-xs rounded-lg my-4'>
      {list && list.length > 0 && list.map((prize, index) => (
        <div key={`prize${index}`} className='border-b border-gray-700 py-2'>
          {prize}
        </div>
      ))}
      <div className='py-2 text-yellow-300'>Total: R$ {total.toFixed(2)}</div>
    </div>
  )
}
