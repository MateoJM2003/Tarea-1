
import React from 'react';
import { AreaCuadrado } from "./Componentes/AreaCuadrado";
import { DividirArrgl } from './Componentes/DividirArrgl';

import { SumarArrgl  } from './Componentes/sumarArrgl';

import { Contador } from './Componentes/Contador';

import AlumnosListado from './Componentes/AlumnosListado';






const App = () => { 
  const lado = 5;

  return ( 
    <div className="mt-2"> 
      <h1>Actidad-Actonoma</h1> 
      {<AreaCuadrado lado={lado}/>}


      {<SumarArrgl/>}


      {<DividirArrgl/>}


      {<Contador/>}


      {<AlumnosListado/>}


      

      
    </div> 
  ); 
}; 

export default App;
