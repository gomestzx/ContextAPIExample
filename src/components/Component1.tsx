import React from 'react';



// Usar hooks do Context

import { useExampleContext } from '../hooks/useExampleContext';

export default function Component1() {
  const { setUserText, setUserNumber } = useExampleContext();
  return (
    <>
      <h1>Component 1</h1>
      <input
        type="text"
        placeholder="Setar o estado do componente2"
        onChange={(e) => setUserText(e.target.value)}
      />
      <br />{' '}
      <input
        type="number"
        min={1}
        max={10}
        onChange={(e) => setUserNumber(e.target.value)}
      />
    </>
  );
}
