import React from 'react'
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';



function App(){
  return (
    <>
    {/* <h1>Hola Mundo</h1> */}

    {/* <FirstApp title="Titulo" subtitle='Hola subtitulo' ></FirstApp> */}
    <CounterApp value= { 2 } ></CounterApp>
    </>
  )
}

export default App;

