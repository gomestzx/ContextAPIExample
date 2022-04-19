import React, { createContext, useState } from 'react';

interface IExampleContext {
  text: string;
  number: number;
  setUserText(e): void;
  setUserNumber(e): void;
}

interface IProvider {
  children: React.ReactNode;
}

export const ExampleContext = createContext({} as IExampleContext);

export function ExampleProvider({ children }: IProvider) {
  const [userText, setUserText] = useState('texto');
  const [userNumber, setUserNumber] = useState(1);
  return (
    <ExampleContext.Provider
      value={{ text: userText, number: userNumber, setUserText, setUserNumber }}
    >
      {children}
    </ExampleContext.Provider>
  );
}
