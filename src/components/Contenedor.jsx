import { useEffect, useState } from 'react'
import ListaPersonajes from './ListaPersonajes';
import Buscador from './Buscador';
import '../css/Contenedor.css'


function Contenedor() {
  //se guarda en diferentes estados
  const [personajes, setPersonajes] = useState([])
  const [info, setInfo] = useState([])
  const [buscado, setBuscado] = useState(' ')

  //funcion para traer los personajes
  const getPersonajes = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setPersonajes(data.results)
    setInfo(data.info)
  }

  //el componente se ejecuta cuando el componente se monta en pantalla y cuando cambia el valor de buscado
  useEffect(() => {
    getPersonajes();


  }, [buscado])

  console.log();

  return (
    <>
      <h1>Bienvenido a la Rick and Morty App</h1>

      <Buscador setBuscado={setBuscado} />

      {/* <button onClick={getPersonajes}>
          Traer los personajes
        </button> */}

      <ListaPersonajes personajes={personajes} />

    </>
  )
}

export default Contenedor
