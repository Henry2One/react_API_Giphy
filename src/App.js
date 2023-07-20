import React, { useEffect, useState } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';


function App() {

  const [ gifs, setGifs ] = useState([]);

  useEffect( () => { 
      getGifs().then( gifs => setGifs(gifs) );
  }, []);
  //useEffect( function() { console.log('Funciona'); });

  return (
    <div className="App">
      <section className="App-header">

        <ListOfGifs gifs = { gifs } />

      </section>
      <button onClick={ () => { getGifs({keyword: 'pato'}).then( gifs => setGifs(gifs) ); } }>Change gifs</button>
    </div>
  );
}

export default App;
