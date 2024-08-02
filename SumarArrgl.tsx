
import React from 'react';

const sumarElementos = (numeros: number[]): number => {
  return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
};



export const SumarArrgl: React.FC = () => {
  const numeros = [2, 2, 2, 2, 2];
  const suma = sumarElementos(numeros);






  return (
    <div>
      <h2>Suma de los elementos</h2>
      <p>arreglo  : {numeros.join(', ')}</p>
      <p>suma  : {suma}</p>
    </div>
  );
};
