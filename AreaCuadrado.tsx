
import React from 'react';

interface AreaCuadrado {
  lado: number;
}

export const AreaCuadrado: React.FC<AreaCuadrado> = ({ lado }) => {
    
  const calcularArea = (lado: number): number => {
    return lado * lado;
  };

  
  const area = calcularArea(lado);

  return (
    <div>
      <h2>Área-Cuadrado</h2>
      <p>Lado del cuadrado es {lado}</p>
      <p>El área del cuadrado es {area}</p>
    </div>
  );
};
