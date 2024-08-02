import React, { useState } from 'react';

type Alumno = {
  nombre: string;
  edad: number;
  calificacion: number;
};

const AlumnosListado = () => {
  const [alumnos] = useState<Alumno[]>([

    { nombre: 'Mateo Lopez', edad: 21, calificacion: 10 },

    { nombre: 'Erick Peñafiel', edad: 21, calificacion: 7},

    { nombre: 'Rocio Ruales', edad: 21, calificacion: 8 },
  ]);

  //calcular el promedio
  const calcularPromedio = (alumnos: Alumno[]): number => {

    const totalCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);

    return totalCalificaciones / alumnos.length;
  
  };

  const promedio = calcularPromedio(alumnos);

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.nombre}>
            {alumno.nombre} - Edad: {alumno.edad} - Calificación: {alumno.calificacion}
          </li>
        ))}
      </ul>
      <p>calificaciones: {promedio}</p>
    </div>
  );
};

export default AlumnosListado;

