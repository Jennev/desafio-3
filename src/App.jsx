import { useState } from 'react'
import './App.css'

import Listado from './Components/Listado'
import Formulario from './Components/Formulario'
import Buscador from './Components/Buscador'
import Alert from './Components/Alert'

import { BaseColaboradores } from './BaseColaboradores'

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  return (
    <div>
      <h1> Lista de Colaboradores</h1>

      <div className='row'>
        <div>
          <Listado />
        </div>

      </div>




    </div>
  )
}

export default App;
