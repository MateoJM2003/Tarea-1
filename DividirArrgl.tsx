import React from 'react';

const dividirArregloPorCinco = (numeros: number[]): number[] => {
  return numeros.map(numero => numero / 5);
};

//función de división
export const DividirArrgl: React.FC = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const nuevoArreglo = dividirArregloPorCinco(arreglo);

  return (
    <div>
      <h2>Arreglo</h2>
      <p>{arreglo.join(', ')}</p>
      <h2>Arreglo dividido a /5</h2>
      <p>{nuevoArreglo.join(', ')}</p>
    </div>
  );
};
